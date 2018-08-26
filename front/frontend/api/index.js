const Request = require('superagent');
const Messages = require('./messages');


async function fetch(object) {
    const {
        method, path, body, commit, multi, request_name,
    } = object;
    commit(Messages.LOADING, { multi, request_name });

    let super_request = Request[method.toLowerCase()](path);
    if (body != null && Object.keys(body).length > 0) {
        super_request = super_request.send(object.body);
    }
    try {
        const res = await super_request;
        return {
            type: Messages.SUCCESS,
            content: res.body,
            header: res.header,
        };
    } catch (err) {
        return {
            type: Messages.FAILURE,
            error: err.response != null ? err.response.text : err.message,
            error_code: err.status,
        };
    }
}

module.exports = {
    fetch,
};
