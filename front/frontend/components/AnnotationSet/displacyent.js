// - ----------------------------------
// - 💥 DISPLACY ENT
// - ----------------------------------


class displaCyENT {
    constructor(api, options) {
        this.api = api;
        this.container = document.querySelector(options.container || '#displacy');

        this.defaultText = options.defaultText || 'When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously.';
        this.defaultModel = options.defaultModel || 'en';
        this.defaultEnts = options.defaultEnts || ['person', 'org', 'gpe', 'loc', 'product'];

        this.onStart = options.onStart || false;
        this.onSuccess = options.onSuccess || false;
        this.onError = options.onError || false;
        this.onRender = options.onRender || false;
    }
    render(text, spans, ents) {
        this.container.innerHTML = '';
        let offset = 0;

        spans.forEach(({ type, start, end }) => {
            const entity = text.slice(start, end);
            const fragments = text.slice(offset, start).split('\n');

            fragments.forEach((fragment, i) => {
                this.container.appendChild(document.createTextNode(fragment));
                if (fragments.length > 1 && i != fragments.length - 1) this.container.appendChild(document.createElement('br'));
            });

            if (ents.includes(type.toLowerCase())) {
                const mark = document.createElement('mark');
                mark.setAttribute('data-entity', type.toLowerCase());
                mark.appendChild(document.createTextNode(entity));
                this.container.appendChild(mark);
            } else {
                this.container.appendChild(document.createTextNode(entity));
            }

            offset = end;
        });

        this.container.appendChild(document.createTextNode(text.slice(offset, text.length)));

        console.log(`%c💥  HTML markup\n%c<div class="entities">${this.container.innerHTML}</div>`, 'font: bold 16px/2 arial, sans-serif', 'font: 13px/1.5 Consolas, "Andale Mono", Menlo, Monaco, Courier, monospace');

        if (typeof this.onRender === 'function') this.onRender();
    }
}
