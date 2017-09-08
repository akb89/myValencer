function format(form, ...args) {
    return form.replace(/{(\d+)}/g, (match, number) => {
        if (typeof args[number] !== 'undefined') {
            return args[number];
        }
        return match;
    });
}

function format_with_obj(form, obj) {
    return form.replace(/{([A-Za-z_.-]+)}/g, (match, name) => {
        const info = obj[name];
        if (info != null) {
            return info;
        }
        return match;
    });
}

function splice(str, idx, rem, insert) {
    return str.slice(0, idx) + insert + str.slice(idx + Math.abs(rem));
}

module.exports = {
    format,
    format_with_obj,
    splice,
};
