// @flow
function get_ws_url(location: Object): string {
    let protocol = 'ws';
    if (location.protocol === 'https') {
        protocol = 'wss';
    }
    return `${protocol}://${location.hostname}${location.port ? `:${location.port}` : ''}`;
}

module.exports = {
    get_ws_url,
};
