const _ = require('lodash');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

module.exports = {
    name: 'Frame',
    props: ['name', 'lexUnits', 'frameElements', 'semTypes', 'definition'],
    computed: {
        orderedFrameElements() {
            return _.orderBy(this.frameElements, ['coreType', 'name']);
        },
    },
    methods: {
        format_definition(rawHtmlDefinition) {
            const container = document.createElement('div');
            const dom = new JSDOM(rawHtmlDefinition);
            let exxists = false;
            let ul = '';
            for (const child of dom.window.document.querySelector('def-root').childNodes) {
                if (child.tagName === undefined) {
                    // A piece of text
                    container.appendChild(document.createTextNode(child.textContent));
                } else if (child.tagName === 'FEN') {
                    const mark = document.createElement('mark');
                    if (child.textContent in this.$store.state.feColorMap) {
                        mark.setAttribute('fename-format', this.$store.state.feColorMap[child.textContent]);
                    } else {
                        this.$store.commit('add_entry_to_map', { feName: child.textContent, color: `f${this.$store.state.colorIndex}` });
                        mark.setAttribute('label-format', `f${this.$store.state.colorIndex}`);
                    }
                    mark.appendChild(document.createTextNode(child.textContent));
                    container.appendChild(mark);
                } else if (child.tagName === 'EX' && child.textContent !== '') {
                    // If not empty, needs to be reparsed for FEX and T tags
                    if (!exxists) {
                        ul = document.createElement('ul');
                        exxists = true;
                    }
                    const li = document.createElement('li');
                    for (const exchild of child.childNodes) {
                        if (exchild.tagName === undefined) {
                            li.appendChild(document.createTextNode(exchild.textContent));
                        } else if (exchild.tagName === 'FEX') {
                            const mark = document.createElement('mark');
                            mark.setAttribute('fe-name', exchild.getAttribute('name'));
                            if (exchild.getAttribute('name') in this.$store.state.feColorMap) {
                                mark.setAttribute('label-format', this.$store.state.feColorMap[exchild.getAttribute('name')]);
                            } else {
                                this.$store.commit('add_entry_to_map', { feName: exchild.getAttribute('name'), color: `f${this.$store.state.colorIndex}` });
                                mark.setAttribute('label-format', `f${this.$store.state.colorIndex}`);
                            }
                            mark.appendChild(document.createTextNode(exchild.textContent));
                            li.appendChild(mark);
                        } else if (exchild.tagName === 'T') {
                            const mark = document.createElement('mark');
                            mark.setAttribute('label-format', 'f0');
                            mark.appendChild(document.createTextNode(exchild.textContent));
                            li.appendChild(mark);
                        }
                    }
                    ul.appendChild(li);
                    container.appendChild(ul);
                }
            }
            return container.innerHTML;
        },
    },
};
