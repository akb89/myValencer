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
    update_query: (state, input) => {
        state.queries.current = input;
    },
    reset_state: (state) => {
        state.feColorMap = {};
        state.colorIndex = 1;
    },
    add_entry_to_map: (state, payload) => {
        state.feColorMap[payload.feName] = payload.color;
        state.colorIndex += 1;
    },
};
