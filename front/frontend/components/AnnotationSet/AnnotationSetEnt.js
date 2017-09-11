module.exports = {
    name: 'AnnotationSetEnt',
    props: ['labels', 'text'],
    methods: {
        display_annotation(text, labels) {
            const container = document.createElement('div');
            // container.setAttribute('class', 'fnlabels');
            let offset = 0;
            const sorted_and_filtered_labels = labels.reduce((filtered, label) => {
                if (label.type === 'FE') {
                    filtered.push(label);
                }
                return filtered;
            }, []).sort((a, b) => a.startPos - b.startPos);
            let i = 1;
            sorted_and_filtered_labels.forEach((label) => {
                const labeled_text = text.slice(label.startPos, label.endPos + 1);
                const fragments = text.slice(offset, label.startPos).split('\n');
                fragments.forEach((fragment, i) => {
                    container.appendChild(document.createTextNode(fragment));
                    if (fragments.length > 1 && i !== fragments.length - 1) {
                        container.appendChild(document.createElement('br'));
                    }
                });
                const mark = document.createElement('mark');
                mark.setAttribute('label-format', `f${i}`);
                mark.setAttribute('fe-name', label.name);
                mark.appendChild(document.createTextNode(labeled_text));
                container.appendChild(mark);
                i += 1;
                offset = label.endPos + 1;
            });

            container.appendChild(document.createTextNode(text.slice(offset, text.length)));

            console.log(`%c💥  HTML markup\n%c${container.innerHTML}`,
            'font: bold 16px/2 arial, sans-serif', 'font: 13px/1.5 Consolas, "Andale Mono", Menlo, Monaco, Courier, monospace');
            return container.innerHTML;
        },
    },
};
