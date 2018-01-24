const API = require('../../api');
const Messages = require('../../api/messages');

module.exports = {
    call_api: async (ctx, { path, method, body }) => {
        const payload = {
            path,
            method,
            body,
            commit: ctx.commit,
        };

        const response = await API.fetch(payload);
        ctx.commit(Messages.FETCH, response);
    },
};
