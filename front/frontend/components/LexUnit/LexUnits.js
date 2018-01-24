module.exports = {
    name: 'LexUnits',
    data() {
        return {
        };
    },
    methods: {
        display_tab(tab_name) {
            this.$store.commit('display_tab', { name: tab_name, display: 'subtype' });
        },
    },
};
