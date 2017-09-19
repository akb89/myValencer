module.exports = {
    name: 'AnnotationSetEnt',
    props: ['labels', 'frame', 'text', 'pattern'],
    methods: {
        format_pattern(pattern) {
            if (!('valenceUnits' in pattern)) {
                return '';
            }
            return pattern.valenceUnits.reduce((array, val) => {
                if (val.GF === undefined) {
                    array.push(`${val.FE.name}.${val.PT}`);
                } else {
                    array.push(`${val.FE.name}.${val.PT}.${val.GF}`);
                }
                return array;
            }, []).join(' ');
        },
        display_annotation(text, labels) {
            const container = document.createElement('div');
            // container.setAttribute('class', 'fnlabels');
            let offset = 0;
            const merged_labels = labels.reduce((filtered, label) => {
                if (label.type === 'FE' && Object.prototype.hasOwnProperty.call(label, 'startPos') && Object.prototype.hasOwnProperty.call(label, 'endPos')) {
                    filtered.push(label);
                } else if (label.type === 'Target' && Object.prototype.hasOwnProperty.call(label, 'startPos') && Object.prototype.hasOwnProperty.call(label, 'endPos')) {
                    filtered.push(label);
                }
                return filtered;
            }, []).sort((a, b) => a.startPos - b.startPos);
            // const fe_labels = labels.reduce((filtered, label) => {
            //     if (label.type === 'FE' && Object.prototype.hasOwnProperty.call(label, 'startPos') && Object.prototype.hasOwnProperty.call(label, 'endPos')) {
            //         filtered.push(label);
            //     }
            //     return filtered;
            // }, []);
            // const target_labels = labels.reduce((merged, label) => {
            //     if (label.type === 'Target' && Object.prototype.hasOwnProperty.call(label, 'startPos') && Object.prototype.hasOwnProperty.call(label, 'endPos')) {
            //         if (merged.length !== 0) {
            //             console.log(merged);
            //             return merged.forEach((tmp_label) => {
            //                 if (label.startPos - tmp_label.endPos === 1) {
            //                     return [{ name: 'Target', type: 'Target', startPos: tmp_label.startPos, endPos: label.endPos }];
            //                 }
            //                 if (tmp_label.startPos - label.endPos === 1) {
            //                     return [{ name: 'Target', type: 'Target', startPos: label.startPos, endPos: tmp_label.endPos }];
            //                 }
            //                 merged.push(label);
            //                 return merged;
            //             });
            //         }
            //         merged.push(label);
            //     }
            //     return merged;
            // }, []);
            // const merged_labels = fe_labels.concat(target_labels).sort((a, b) => a.startPos - b.startPos);
            console.log(JSON.stringify(merged_labels));
            let j = 1;
            merged_labels.forEach((label) => {
                const labeled_text = text.slice(label.startPos, label.endPos + 1);
                const fragments = text.slice(offset, label.startPos).split('\n');
                fragments.forEach((fragment, i) => {
                    container.appendChild(document.createTextNode(fragment));
                    if (fragments.length > 1 && i !== fragments.length - 1) {
                        container.appendChild(document.createElement('br'));
                    }
                });
                if (label.type === 'FE') {
                    const mark = document.createElement('mark');
                    mark.setAttribute('label-format', `f${j}`);
                    mark.setAttribute('fe-name', label.name);
                    mark.appendChild(document.createTextNode(labeled_text));
                    container.appendChild(mark);
                    j += 1;
                } else if (label.type === 'Target') {
                    const mark = document.createElement('mark');
                    mark.setAttribute('label-format', 'f8');

                    mark.appendChild(document.createTextNode(labeled_text));
                    container.appendChild(mark);
                }
                offset = label.endPos + 1;
            });

            container.appendChild(document.createTextNode(text.slice(offset, text.length)));

            return container.innerHTML;
        },
    },
};
