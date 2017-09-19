const StringUtils = require('../../utils/strings');
const Utils = require('../../utils/utils');
const APIRoutes = require('../../api/routes');

module.exports = {
    name: 'home',
    data() {
        return {
            state: {
                input: '',
                try_query: 'Donor.NP.Ext Theme.NP.Obj Recipient.PP.Dep',
                request_type: 'ANNOSET',
                final_request_type: '',
            },
        };
    },
    methods: {
        make_request_type(input, type) {
            if (!Utils.is_numeric(input)
                    && !Utils.is_oid(input)) {
                return `${type}S`;
            }
            return type;
        },
        update_input(e) {
            const input = e.target.value;
            this.state.input = input;
            this.state.final_request_type = this.make_request_type(this.state.input,
                    this.state.request_type);
        },
        fetch_data(e) {
            e.preventDefault();
            if (this.is_id_type_query(this.state.input)) {
                this.fetch_id_data(e);
            } else {
                this.fetch_vp_data(e);
            }
        },
        fetch_id_data(e) {
            e.preventDefault();
            this.$store.dispatch('annoset/call_api', { method: 'GET',
                path: StringUtils.format_with_obj(APIRoutes.ANNOSET,
                { id: this.state.input }) });
            this.$store.dispatch('frame/call_api', { method: 'GET',
                path: StringUtils.format_with_obj(APIRoutes.FRAME,
                { id: this.state.input }) });
            this.$store.dispatch('lexunit/call_api', { method: 'GET',
                path: StringUtils.format_with_obj(APIRoutes.LEXUNIT,
                { id: this.state.input }) });
        },
        fetch_vp_data(e) {
            e.preventDefault();
            this.$store.dispatch('annoset/call_api', { method: 'GET',
                path: StringUtils.format_with_obj(APIRoutes.ANNOSETS,
                  { id: this.state.input }) });
            this.$store.dispatch('frame/call_api', { method: 'GET',
                path: StringUtils.format_with_obj(APIRoutes.FRAMES,
                  { id: this.state.input }) });
            this.$store.dispatch('cytoframe/call_api', { method: 'GET',
                path: StringUtils.format_with_obj(APIRoutes.CYTOFRAMES,
                        { id: this.state.input }) });
            this.$store.dispatch('lexunit/call_api', { method: 'GET',
                path: StringUtils.format_with_obj(APIRoutes.LEXUNITS,
                  { id: this.state.input }) });
            this.$store.dispatch('cytolexunit/call_api', { method: 'GET',
                path: StringUtils.format_with_obj(APIRoutes.CYTOLEXUNITS,
                              { id: this.state.input }) });
        },
        is_id_type_query(input) {
            if (Utils.is_numeric(input) || Utils.is_oid(input)) {
                return true;
            }
            return false;
        },
        fetch_trying_data(e) {
            this.state.input = this.state.try_query;
            if (this.is_id_type_query(this.state.input)) {
                this.fetch_id_data(e);
            } else {
                this.fetch_vp_data(e);
            }
        },
        display_tab(tab_name) {
            this.$store.commit('display_tab', { name: tab_name, display: 'type' });
        },
    },
    directives: {
        focus: {
            inserted: el => el.focus(),
        },
    },
};
