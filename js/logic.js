String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

function error_handler(err) {
    console.error(err);
    console.error(err.message);
    console.error(err.stackTrace);
}

function http_error_handler(response) {
    if(response.status === 404 || response.status === 400){
        response.text().then(function(ret) {
            $('#404-row .card-panel').html(ret);
            $('#404-row').removeClass('hide');
        });
    } else {
        $('#404-row .card-panel').html('Unknown error!');
        $('#404-row').removeClass('hide');
    }
}

function format_fe_pt_gf(valence) {
    var name = "";
    if(valence.hasOwnProperty('FE')) {
        name += valence.FE.name + ".";
    } else {
        name += "*."
    }

    if(valence.hasOwnProperty('PT')) {
        name += valence.PT.name + ".";
    } else {
        name += "*.";
    }

    if(valence.hasOwnProperty('GF')) {
        name += valence.GF.name;
    } else {
        name += "*";
    }

    return name;
}

function run_query(search, route_id) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var options = {
        method: 'GET',
        mode: 'cors',
        headers: headers,
    };

    var route = find_route(route_id);
    var escaped_search = encodeURI(search);
    var final_request  = route.format(escaped_search);

    fetch(final_request, options)
    .then(function(response) {
        if(response.status === 200) {
            response.json()
            .then(function(data) {
                console.log(data);
                format_results(data, route_id);
            });
        } else {
            http_error_handler(response);
        }
    })
    .catch(error_handler);
}

function format_sentence(sentence, labels, frame) {
    var stemplate = "<h5>Sentence</h5><hr /><p>";
    var etemplate = "</p>";
    var valences = {};
    var new_labels = [];

    for(var i in labels) {
        var label = labels[i];
        var name = label.name;
        var end  = label.endPos;
        var start = label.startPos;

        if(start === end){
            continue;
        }

        if(valences.hasOwnProperty(start)) {
            valences[start][label.type] = {end: end, name: name};
        } else {
            valences[start] = {};
            valences[start][label.type] = {end: end, name: name};
        }
    }

    for(var start in valences) {
        var valence = valences[start];
        if(!valence.hasOwnProperty('Target') &&
            !valence.hasOwnProperty('FE') &&
            !valence.hasOwnProperty('PT') &&
            !valence.hasOwnProperty('GF') ){
            continue;
        }

        if(valence.hasOwnProperty('FE')){
            new_labels.push( {text: "[", pos: parseInt(start)} );
            new_labels.push( {text: "]<sub>"+ format_fe_pt_gf(valence) + "</sub> ", pos: valence.FE.end+1} );
        } else {
            new_labels.push( {text: "<strong>", pos: parseInt(start)} )
            new_labels.push( {text: "</strong><em><sub>" + frame.name + "</sub></em> ", pos: valence.Target.end+1} );
        }
    }

    new_labels.sort(function(a, b) {
        return b.pos - a.pos;
    });

    for(var i in new_labels) {
        var label = new_labels[i];
        var pos   = label.pos;
        var text  = label.text;
        sentence.text = sentence.text.splice(pos, 0, text);
    }

    return stemplate + sentence.text + etemplate;
}

function format_pattern(pattern) {
    var stemplate = "<h6 class='border'><strong>Valence Pattern</strong>: ";
    var etemplate = "</h6>";
    var patterns = [];
    for(var i in pattern.valenceUnits) {
        var val = pattern.valenceUnits[i];
        patterns.push( val.FE + "." + val.PT + "." + val.GF );
    }
    return stemplate + patterns.join(" ") + etemplate;
}

function format_annotation_set(data, html) {
    var stemplate = "<div class='col s12'><div class='card-panel'>"
    var etemplate = "</div></div>"

    html += stemplate;
    html += format_sentence(data.sentence, data.labels, data.lexUnit.frame);

    if(data.hasOwnProperty('pattern')){
        html += format_pattern(data.pattern);
    }

    html += etemplate;

    return html;
}

function format_annotation_sets(data, is_array) {
    var html = "";
    if(is_array) {
        if(data.length === 0) {
            $('#nothing-row').removeClass('hide');
            return;
        }

        for(var i in data) {
            var anno = data[i];
            html = format_annotation_set(anno, html);
        }
    } else {
        html = format_annotation_set(data, html);
    }

    return html;
}

function format_frames(data, is_array) {
    var html = "";
    if(is_array) {
        for(var i in data) {
            var frame = data[i];
            html = format_frame(frame, html);
        }
    } else {
        html = format_frame(data, html);
    }

    return html;
}

function format_frame(data, html) {
    var stemplate = "<div class='col s12'><div class='card-panel'>"
    var etemplate = "</div></div>"

    html += stemplate;
    html += "<h5>" + data.name + "</h5><hr />";
    html += "<h6 class='border-bottom'><strong>Lexical Units</strong></h6>";
    html += "<ul class='collection'>";
    for(var i in data.lexUnits) {
        var lexUnit = data.lexUnits[i];
        html += "<li class='collection-item'>" + lexUnit.name + "</li>";
    }
    html += "</ul>";

    html += "<h6 class='border-bottom'><strong>Frame Elements</strong></h6>";
    html += "<ul class='collection'>";
    for(var i in data.frameElements) {
        var fe = data.frameElements[i];
        html += "<li class='collection-item'>" + fe.name + "</li>";
    }
    html += "</ul>";


    if(data.semTypes.length == 0){
        html += etemplate;
        return html;
    }

    html += "<h5>Semantic Types</h5><hr />";
    html += "<ul class='collection'>";
    for(var i in data.semTypes) {
        var sem_type = data.semTypes[i];
        html += "<li class='collection-item'>" + sem_type.name + "</li>";
    }
    html += "</ul>";
    html += etemplate;

    return html;
}

function format_lexical_units(data, is_array) {
    var html = "";
    if(is_array) {
        for(var i in data) {
            var lu = data[i];
            html = format_lexical_unit(lu, html);
        }
    } else {
        html = format_lexical_unit(data, html);
    }

    return html;
}

function format_lexical_unit(data, html) {
    var stemplate = "<div class='col s12'><div class='card-panel'>"
    var etemplate = "</div></div>"
    html += stemplate;
    html += "<h5>" + data.name + " (" + data.pos + ")</h5><hr />";
    html += "<p>" + data.definition + "</p>";
    html += "<h6><strong>ID</strong>: " + data._id + "</h6>";
    html += "<h6><strong>Frame</strong>: " + data.frame.name + "</h6>";

    if(data.semTypes.length == 0){
        html += etemplate;
        return html;
    }

    html += "<h5>Semantic Types</h5><hr />";
    html += "<ul class='collection'>";
    for(var i in data.semTypes) {
        var sem_type = data.semTypes[i];
        html += "<li class='collection-item'>" + sem_type.name + "</li>";
    }
    html += "</ul>";
    html += etemplate;

    return html;
}

function formatting_dispatch(data, route_id) {
    switch(route_id) {
        case "frame":
            return format_frames(data, false);
        case "lexical_unit":
            return format_lexical_units(data, false);
        case "frames":
            return format_frames(data, true);
        case "lexical_units":
            return format_lexical_units(data, true);
        case "annotation_set":
            return format_annotation_sets(data, false);
        case "annotation_sets":
        default:
            return format_annotation_sets(data, true);
    }
}

function format_results(data, route_id) {
    var html = formatting_dispatch(data, route_id);
    $('#results').html(html);
}

function find_route(route_id) {
    switch(route_id) {
        case "frame":
            return myValencer_url_prefix + "/frame/{0}?populate=true";
        case "lexical_unit":
            return myValencer_url_prefix + "/lexUnit/{0}?populate=true";
        case "frames":
            return myValencer_url_prefix + "/frames?vp={0}&populate=true";
        case "lexical_units":
            return myValencer_url_prefix + "/lexUnits?vp={0}&populate=true";
        case "annotation_set":
            return myValencer_url_prefix + "/annoSet/{0}?populate=true";
        case "annotation_sets":
        default:
            return myValencer_url_prefix + "/annoSets?populate=true&vp={0}";
    }
}

function is_numeric_search_id(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
}

function run_search(e) {
    e.preventDefault();
    $('#nothing-row').addClass('hide');
    $('#404-row').addClass('hide');
    $('#results').html('');
    var search   = $('#search').val();

    var route_id = $('input[name=routes]:checked').attr('id');
    if( !is_numeric_search_id(search) ){
        route_id += "s";
    }
    run_query(search, route_id);
}

$(document).ready(function() {
    $('#search-form').submit(function(e) {
        run_search(e);
    });
    $('#search-btn').click(function(e) {
        run_search(e);
    });
});
