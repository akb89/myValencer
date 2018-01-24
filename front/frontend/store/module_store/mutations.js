const Messages = require('../../api/messages');

module.exports = {
    [Messages.LOADING]: (state) => {
        state.loading = true;
        state.success = false;
        state.content = [];
    },
    [Messages.FETCH]: (state, payload) => {
        state.success = payload.type === Messages.SUCCESS;
        if (payload.content == null) {
            payload.content = [];
        }

        if (state.success) {
            state.content = payload.content instanceof Array ? payload.content
                : [payload.content];
            state.total = 'total-count' in payload.header ?
                parseInt(payload.header['total-count'], 10) : state.content.length;
            state.skip = 'skip' in payload.header ? parseInt(payload.header.skip, 10) : 0;
        } else {
            state.content = payload.content;
        }
        state.loading = false;
    },
    reset_state: (state) => {
        state.skip = 0;
        state.total = 0;
        state.feColorMap = {};
        state.colorIndex = 1;
    },
    add_entry_to_map: (state, payload) => {
        state.feColorMap[payload.feName] = payload.color;
        state.colorIndex += 1;
    },
};
