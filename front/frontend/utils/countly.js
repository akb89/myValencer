
function add_custom_event(key, segmentation) {
    const Countly = Countly || {};
    Countly.q = Countly.q || [];

    Countly.q.push(['add_event', {
        key,
        count: 1,
        segmentation,
    }]);
}

module.exports = {
    add_custom_event,
};
