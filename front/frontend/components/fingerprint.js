// @flow
// const Crypto = require('crypto');
const Fingerprint = require('fingerprintjs2');

function get_fingerprint(): Promise<Object> {
    return new Promise((fullfill) => {
        new Fingerprint().get((res) => {
            const obj = {
                fingerprint: res,
            };
            return fullfill(obj);
        });
    });
}

module.exports = {
    get_fingerprint,
};
