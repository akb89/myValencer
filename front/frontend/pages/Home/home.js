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
            const path = StringUtils.format_with_obj(APIRoutes[this.state.final_request_type],
                { id: this.state.input });
            this.$store.dispatch('call_api', {
                method: 'GET',
                path,
            });
        },
        fetch_trying_data(e) {
            this.state.input = this.state.try_query;
            this.state.final_request_type = this.make_request_type(this.state.input,
                    this.state.request_type);
            this.fetch_data(e);
        },
    },
    directives: {
        focus: {
            inserted: el => el.focus(),
        },
    },
};
