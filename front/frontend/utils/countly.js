
function add_custom_event(_countly, key, segmentation) {
    if (_countly) {
        _countly.q.push(['add_event', {
            key,
            count: 1,
            segmentation,
        }]);
    }
}

module.exports = {
    add_custom_event,
};
