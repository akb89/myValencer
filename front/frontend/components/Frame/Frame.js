const _ = require('lodash');

module.exports = {
    name: 'Frame',
    props: ['name', 'lexUnits', 'frameElements', 'semTypes', 'definition'],
    computed: {
        orderedFrameElements() {
            return _.orderBy(this.frameElements, ['coreType', 'name']);
        },
    },
};
