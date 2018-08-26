const Utils = require('../../utils/utils');
const CountlyUtils = require('../../utils/countly');
const QueryStringMixin = require('../../mixins/QueryStringMixin');

module.exports = {
    name: 'Home',
    mixins: [QueryStringMixin],
    data() {
        return {
            state: {
                core_fe: true,
                strict_vu: false,
                data: {
                    frame: {
                        skip: 0,
                    },
                    annoset: {
                        skip: 0,
                    },
                    lexunit: {
                        skip: 0,
                    },
                    cytoframe: {
                        skip: 0,
                    },
                },
            },
        };
    },
    methods: {
        gohome() {
            this.$store.commit('update_query', { input: '' });
            this.$store.commit('reset_state');
            this.$store.commit('annoset/reset_state');
            this.$store.commit('frame/reset_state');
            this.$store.commit('lexunit/reset_state');
            this._reset_qs();
        },
        update_input(e) {
            const input = e.target.value;
            this.$store.commit('update_query', { input });
            this._add_to_qs('s', input);
        },
        update_strict_vu(e) {
            const val = e.target.value === 'true';
            this.state.strict_vu = val;
            this.$store.commit('update_query', {
                strictVUMatching: val,
            });
        },
        update_core_fe(e) {
            const val = e.target.value === 'true';
            this.state.core_fe = val;
            this.$store.commit('update_query', {
                withExtraCoreFEs: val,
            });
        },
        fetch_data(e, modules = ['annoset', 'frame', 'lexunit', 'cytoframe'], reset_state = true) {
            if (reset_state) {
                this.$store.commit('reset_state');
                this.$store.commit('frame/reset_state');
                this.$store.commit('annoset/reset_state');
                this.$store.commit('lexunit/reset_state');

                try {
                    CountlyUtils.add_custom_event(Countly, 'valencer-init-search', {
                        query: this.$store.state.queries.current.input.trim(),
                    });
                } catch (err) {}
            }

            if (this._get_key_from_qs('tn')) {
                this.display_tab(this._get_key_from_qs('tn'));
            }

            if (modules.length === 1) {
                try {
                    CountlyUtils.add_custom_event(Countly, 'valencer-subsequent-search', {
                        query: this.$store.state.queries.current.input.trim(),
                        type: this._get_key_from_qs('tn'),
                        skip: this.state.data[modules[0]].skip,
                    });
                } catch (err) {}
            }

            modules.forEach((module) => {
                let limit = this.$store.state.queries.items;
                if ('queries' in this.$store.state[module]) {
                    limit = this.$store.state[module].queries.items;
                }
                this.$store.dispatch('call_api', {
                    module_name: module,
                    skip: this.state.data[module].skip,
                    limit,
                });
            });
        },
        fetch_trying_data() {
            const q = Utils.choice(this.$store.state.queries.default);
            this.$store.commit('update_query', { input: q });
            this._add_to_qs('s', q);
            this.fetch_data();
        },
        display_tab(tab_name) {
            this.$store.commit('display_tab', { name: tab_name, display: 'type' });
            this._add_to_qs('tn', tab_name);
        },
    },
    beforeMount() {
        this.$store.commit('update_query', {
            withExtraCoreFEs: this.state.core_fe,
            strictVUMatching: this.state.strict_vu,
        });
    },
    watch: {
        frame_skip() {
            this.fetch_data(null, ['frame'], false);
        },
        annoset_skip() {
            this.fetch_data(null, ['annoset'], false);
        },
        lexunit_skip() {
            this.fetch_data(null, ['lexunit'], false);
        },
    },
    computed: {
        frame_skip() {
            return this.state.data.frame.skip;
        },
        annoset_skip() {
            return this.state.data.annoset.skip;
        },
        lexunit_skip() {
            return this.state.data.lexunit.skip;
        },
    },
    mounted() {
        if (this._get_key_from_qs('s')) {
            this.$store.commit('update_query', { input: this._get_key_from_qs('s') });
            this.fetch_data();
        }
        if (this._get_key_from_qs('tn')) {
            this.display_tab(this._get_key_from_qs('tn'));
        }
    },
    directives: {
        focus: {
            inserted: el => el.focus(),
        },
    },
};
