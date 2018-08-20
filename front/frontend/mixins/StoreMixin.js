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
    },
};
