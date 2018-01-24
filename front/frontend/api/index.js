const Request = require('superagent');
const Messages = require('./messages');


async function fetch(object) {
    const { method, path, body, commit } = object;
    commit(Messages.LOADING);

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
        // FIXME do not assign error to content
        return {
            type: Messages.FAILURE,
            content: err.response != null ? err.response.body : err,
        };
    }
}

module.exports = {
    fetch,
};
