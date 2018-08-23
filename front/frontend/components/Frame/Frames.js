const StoreMixin = require('../../mixins/StoreMixin');

module.exports = {
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
    methods: {
        on_page_change(page, skip) {
            this.$emit('update:skip', skip);
        },
    },
    computed: {
        has_request_frame_error() {
            return this.has_request_error('frame');
        },
    },
};
