// @flow
const _ = require('lodash');

function emit(socket: Object, channel: string, info: Object): string {
    const obj = _.merge({ __ws_channel: channel }, info);
    return JSON.stringify(obj);
}

function dispatch(event: Object) {
    if (!('data' in event)) {
        return; // no dispatch
    }
    const data = JSON.parse(event.data);
}

module.exports = {
    emit,
    dispatch,
};
