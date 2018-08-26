const Constants = require('../utils/constants');

module.exports = {
    computed: {
        has_request_error() {
            return key => !this.$store.state[key].success
                && this.$store.state[key].error
                && this.$store.state[key].error.trim() !== '';
        },
        request_error_message() {
            return key => this.$store.state[key].error;
        },
        request_error_code() {
            return key => this.$store.state[key].error_code;
        },
        is_4xx_code() {
            return key => `${this.request_error_code(key)}`.startsWith('4');
        },
        error_4xx_msg() {
            return Constants.ERROR_4XX_MSG;
        },
    },
};
