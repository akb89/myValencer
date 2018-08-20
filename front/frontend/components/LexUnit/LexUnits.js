const StoreMixin = require('../../mixins/StoreMixin');

module.exports = {
    name: 'LexUnits',
    mixins: [StoreMixin],
    data() {
        return {
        };
    },
    computed: {
        has_request_lexunit_error() {
            return this.has_request_error('lexunit');
        },
    },
    methods: {
        display_tab(tab_name) {
            this.$store.commit('display_tab', { name: tab_name, display: 'subtype' });
        },
    },
};
