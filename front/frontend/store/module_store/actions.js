const API = require('../../api');
const Messages = require('../../api/messages');

module.exports = {
    call_api: async (ctx, {
        path, method, body, multi, request_name,
    }) => {
        const payload = {
            path,
            method,
            body,
            commit: ctx.commit,
            multi,
            request_name,
        };

        const response = await API.fetch(payload);
        ctx.commit(Messages.FETCH, { payload: response, multi: multi || false, request_name });
    },
};
