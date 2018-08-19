const Vue = require('vue');
const Messages = require('../../api/messages');

module.exports = {
    [Messages.LOADING]: (state, { multi, request_name }) => {
        if (multi) {
            if (!(state.loading instanceof Object)) {
                state.loading = {};
            }
            Vue.set(state.loading, request_name, true);
            Vue.set(state.content, request_name, []);
        } else {
            state.loading = true;
            state.content = [];
        }
        state.success = false;
    },
    [Messages.FETCH]: (state, { payload, multi, request_name }) => {
        state.success = payload.type === Messages.SUCCESS;
        if (payload.content == null) {
            payload.content = [];
        }

        if (multi) {
            if (!(state.total instanceof Object)) {
                state.total = {};
            }

            if (!(state.skip instanceof Object)) {
                state.skip = {};
            }

            if (!(state.content instanceof Object) || state.content instanceof Array) {
                state.content = {};
            }
        }

        if (state.success) {
            const content = payload.content instanceof Array ? payload.content : [payload.content];
            const total = 'total-count' in payload.header ? parseInt(payload.header['total-count'], 10) : content.length;
            const skip = 'skip' in payload.header ? parseInt(payload.header.skip, 10) : 0;

            if (multi) {
                Vue.set(state.content, request_name, content);
                Vue.set(state.total, request_name, total);
                Vue.set(state.skip, request_name, skip);
            } else {
                state.content = content;
                state.total = total;
                state.skip = skip;
            }
        } else if (multi) {
            Vue.set(state.content, request_name, payload.content);
            Vue.set(state, 'error', payload.error);
        } else {
            Vue.set(state, 'content', payload.content);
            Vue.set(state, 'error', payload.error);
        }
        Vue.set(state, 'loading', false);
    },
    reset_state: (state) => {
        state.skip = 0;
        state.total = 0;
        state.content = null;
    },
};
