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
};
