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
            let offset = 0;
            const merged_labels = labels.reduce((filtered, label) => {
                if (label.type === 'FE' && Object.prototype.hasOwnProperty.call(label, 'startPos') && Object.prototype.hasOwnProperty.call(label, 'endPos')) {
                    filtered.push(label);
                } else if (label.type === 'Target' && Object.prototype.hasOwnProperty.call(label, 'startPos') && Object.prototype.hasOwnProperty.call(label, 'endPos')) {
                    filtered.push(label);
                }
                return filtered;
            }, []).sort((a, b) => a.startPos - b.startPos);
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
