const StoreMixin = require('../../mixins/StoreMixin');

module.exports = {
    mixins: [StoreMixin],
    computed: {
        has_request_frame_error() {
            return this.has_request_error('frame');
        },
    },
};
