function is_numeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function is_oid(str) {
    return str.match(/^[0-9a-fA-F]{24}$/);
}

module.exports = {
    is_numeric,
    is_oid,
};
