const StoreMixin = require('../../mixins/StoreMixin');

module.exports = {
    name: 'LexUnits',
    props: {
        limit: {
            type: Number,
            required: true,
        },
        skip: {
            type: Number,
            default: 0,
        },
        total: {
            type: Number,
            default: 0,
        },
    },
    mixins: [StoreMixin],
    computed: {
        has_request_lexunit_error() {
            return this.has_request_error('lexunit');
        },
    },
    methods: {
        on_page_change(page, skip) {
            this.$emit('update:skip', skip);
        },
        display_tab(tab_name) {
            this.$store.commit('display_tab', { name: tab_name, display: 'subtype' });
        },
    },
};
