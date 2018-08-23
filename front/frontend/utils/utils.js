function is_numeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function is_oid(str) {
    return str.match(/^[0-9a-fA-F]{24}$/);
}

function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function is_id_type_query(input) {
    if (is_numeric(input) || is_oid(input)) {
        return true;
    }
    return false;
}

module.exports = {
    is_numeric,
    is_oid,
    choice,
    is_id_type_query,
};
