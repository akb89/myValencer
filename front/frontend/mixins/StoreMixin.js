module.exports = {
    computed: {
        has_request_error() {
            return key => !this.$store.state[key].success;
        },
        request_error_message() {
            return key => this.$store.state[key].error;
        },
    },
};
