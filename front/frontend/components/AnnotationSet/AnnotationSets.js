module.exports = {
    name: 'AnnotationSets',
    data() {
        return {
            state: {
                display: {
                    ent: true,
                    dep: false,
                    raw: false,
                },
            },
        };
    },
    methods: {
        display_tab(tab_name) {
            Object.keys(this.state.display).forEach((key) => {
                if (key === tab_name) {
                    this.state.display[key] = true;
                } else {
                    this.state.display[key] = false;
                }
            });
        },
    },
};
