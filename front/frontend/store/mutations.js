const Vue = require('vue');
const _ = require('lodash');

module.exports = {
    display_tab: (state, payload) => {
        // TODO HACK HACK HACK, should use tabs as well
        // TODO REMOVE ALL THIS
        if (payload.display === 'type') {
            if (payload.name === 'ANNOSET') {
                state.display.subtype = 'ENT';
            } else {
                state.display.subtype = 'RAW';
            }
        }
        state.display[payload.display] = payload.name;
    },
    update_query: (state, payload) => {
        state.queries.current = _.merge({}, state.queries.current, payload);
    },
    reset_state: (state) => {
        state.feColorMap = {};
        state.colorIndex = 1;
        state.display.type = 'ANNOSET';
    },
    add_entry_to_map: (state, payload) => {
        Vue.set(state.feColorMap, payload.feName, payload.color);
        state.colorIndex += 1;
    },
};
