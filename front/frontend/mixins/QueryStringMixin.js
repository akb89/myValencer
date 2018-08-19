const _ = require('lodash');

module.exports = {
    methods: {
        _add_to_qs(key, value) {
            const q = _.cloneDeep(this.$route.query);
            q[key] = value;
            this.$router.replace({ query: q });
        },
        _remove_from_qs(key) {
            const q = _.cloneDeep(this.$route.query);
            delete q[key];
            this.$router.replace({ query: q });
        },
        _reset_qs() {
            this.$router.replace({});
        },
        _qs_has_single_key(key) {
            return this.$route.query
                && this.$route.query[key]
                && this.$route.query[key].trim() !== '';
        },
        _get_key_from_qs(key, default_value = null) {
            if (key in this.$route.query) {
                return this.$route.query[key];
            }
            return default_value;
        },
    },
};
