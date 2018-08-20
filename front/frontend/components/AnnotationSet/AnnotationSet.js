module.exports = {
    name: 'AnnotationSet',
    props: ['labels', 'frame', 'text', 'pattern'],
    methods: {
        format_pattern(pattern) {
            if (!('valenceUnits' in pattern)) {
                return '';
            }
            return pattern.valenceUnits.reduce((array, vu) => {
                if (vu.GF === undefined) {
                    array.push(`${vu.FE.name}.${vu.PT}`);
                } else {
                    array.push(`${vu.FE.name}.${vu.PT}.${vu.GF}`);
                }
                return array;
            }, []).join(' ');
        },
        display_annotation(text, labels) {
            const container = document.createElement('div');
            let offset = 0;
            const merged_labels = labels.reduce((filtered, label) => {
                if (label.type === 'FE' &&
                Object.prototype.hasOwnProperty.call(label, 'start') &&
                Object.prototype.hasOwnProperty.call(label, 'end')) {
                    filtered.push(label);
                } else if (label.type === 'Target' &&
                Object.prototype.hasOwnProperty.call(label, 'start') &&
                Object.prototype.hasOwnProperty.call(label, 'end')) {
                    filtered.push(label);
                }
                return filtered;
            }, []).sort((a, b) => a.start - b.start);
            merged_labels.forEach((label) => {
                const labeled_text = text.slice(label.start, label.end + 1);
                const fragments = text.slice(offset, label.start).split('\n');
                fragments.forEach((fragment, i) => {
                    container.appendChild(document.createTextNode(fragment));
                    if (fragments.length > 1 && i !== fragments.length - 1) {
                        container.appendChild(document.createElement('br'));
                    }
                });
                if (label.type === 'FE') {
                    const mark = document.createElement('mark');
                    mark.setAttribute('fe-name', label.name);
                    if (label.name in this.$store.state.feColorMap) {
                        mark.setAttribute('label-format', this.$store.state.feColorMap[label.name]);
                    } else {
                        this.$store.commit('add_entry_to_map', { feName: label.name, color: `f${this.$store.state.colorIndex}` });
                        mark.setAttribute('label-format', `f${this.$store.state.colorIndex}`);
                    }
                    mark.appendChild(document.createTextNode(labeled_text));
                    container.appendChild(mark);
                } else if (label.type === 'Target') {
                    const mark = document.createElement('mark');
                    mark.setAttribute('label-format', 'f0');
                    mark.appendChild(document.createTextNode(labeled_text));
                    container.appendChild(mark);
                }
                offset = label.end + 1;
            });
            container.appendChild(document.createTextNode(text.slice(offset, text.length)));
            return container.innerHTML;
        },
    },
};
