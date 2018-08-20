const baseConfig = require('./all');
const _ = require('lodash');
const production = require('./production');
const development = require('./development');
const testing = require('./testing');

const env = process.env.NODE_ENV || 'development';
let tmp;
try {
    tmp = development;
    if (env === 'production') {
        tmp = production;
    } else if (env === 'testing') {
        tmp = testing;
    }
} catch (error) {
    // process.exit(1);
}

const config = _.merge({ _env: env }, baseConfig, tmp);
module.exports = config;
