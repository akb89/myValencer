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
        } else {
            state.content = payload.content;
        }
        state.loading = false;
    },
};
