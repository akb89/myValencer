module.exports = {
    name: 'Frames',
    data() {
        return {
            state: {
                display: {
                    raw: false,
                    cluster: true,
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
