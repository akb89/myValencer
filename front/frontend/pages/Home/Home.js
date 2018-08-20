const StringUtils = require('../../utils/strings');
const Utils = require('../../utils/utils');
const APIRoutes = require('../../api/routes');
const QueryStringMixin = require('../../mixins/QueryStringMixin');

module.exports = {
    name: 'Home',
    mixins: [QueryStringMixin],
    data() {
        return {
            state: {
                core_fe: true,
                strict_vu: false,
                frame: {
                    queries: {
                        items: 5,
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
        fetch_data() {
            this.$store.commit('reset_state');
            this.$store.commit('annoset/reset_state');
            this.$store.commit('frame/reset_state');
            this.$store.commit('lexunit/reset_state');

            if (this._get_key_from_qs('tn')) {
                this.display_tab(this._get_key_from_qs('tn'));
            }

            if (this.is_id_type_query(this.$store.state.queries.current.input)) {
                this.fetch_id_data();
            } else {
                this.fetch_vp_data();
            }
        },
        fetch_id_data() {
            this.$store.dispatch('annoset/call_api', {
                method: 'GET',
                path: StringUtils.format_with_obj(
                    APIRoutes.ANNOSET,
                    { id: this.$store.state.queries.current.input },
                ),
            });
            this.$store.dispatch('frame/call_api', {
                method: 'GET',
                path: StringUtils.format_with_obj(
                    APIRoutes.FRAME,
                    { id: this.$store.state.queries.current.input },
                ),
            });
            this.$store.dispatch('lexunit/call_api', {
                method: 'GET',
                path: StringUtils.format_with_obj(
                    APIRoutes.LEXUNIT,
                    { id: this.$store.state.queries.current.input },
                ),
            });
        },
        fetch_vp_data() {
            const skip = 0;
            const limit = this.$store.state.queries.items;
            this.$store.dispatch('annoset/call_api', {
                method: 'GET',
                path: StringUtils.format_with_obj(
                    APIRoutes.ANNOSETS,
                    {
                        id: this.$store.state.queries.current.input,
                        skip,
                        limit,
                        strictVUMatching: this.state.strict_vu,
                        withExtraCoreFEs: this.state.core_fe,
                    },
                ),
            });
            this.$store.dispatch('fehierarchy/call_api', {
                method: 'GET',
                path: StringUtils.format_with_obj(
                    APIRoutes.FEHIERARCHY,
                    { id: this.$store.state.queries.current.input },
                ),
            });
            this.$store.dispatch('frame/call_api', {
                method: 'GET',
                path: StringUtils.format_with_obj(
                    APIRoutes.FRAMES,
                    {
                        id: this.$store.state.queries.current.input,
                        skip,
                        limit: this.state.frame.queries.items,
                        strictVUMatching: this.state.strict_vu,
                        withExtraCoreFEs: this.state.core_fe,
                    },
                ),
            });
            this.$store.dispatch('cytoframe/call_api', {
                method: 'GET',
                path: StringUtils.format_with_obj(
                    APIRoutes.CYTOFRAMES,
                    {
                        id: this.$store.state.queries.current.input,
                        strictVUMatching: this.state.strict_vu,
                        withExtraCoreFEs: this.state.core_fe,
                    },
                ),
            });
            this.$store.dispatch('lexunit/call_api', {
                method: 'GET',
                path: StringUtils.format_with_obj(
                    APIRoutes.LEXUNITS,
                    {
                        id: this.$store.state.queries.current.input,
                        skip,
                        limit,
                        strictVUMatching: this.state.strict_vu,
                        withExtraCoreFEs: this.state.core_fe,
                    },
                ),
            });
        },
        is_id_type_query(input) {
            if (Utils.is_numeric(input) || Utils.is_oid(input)) {
                return true;
            }
            return false;
        },
        fetch_trying_data() {
            // TODO: fall back to fetch_data
            const q = Utils.choice(this.$store.state.queries.default);
            this.$store.commit('update_query', { input: q });
            this._add_to_qs('s', q);
            if (this.is_id_type_query(q)) {
                this.fetch_id_data();
            } else {
                this.fetch_vp_data();
            }
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
