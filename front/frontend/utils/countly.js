
function add_custom_event(_countly, key, segmentation) {
    _countly.q.push(['add_event', {
        key,
        count: 1,
        segmentation,
    }]);
}

module.exports = {
    add_custom_event,
};
