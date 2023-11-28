export function getQueryParams(query) {
    var params = {};
    for (const key of query.keys()) {
        params[key] = query.get(key);
    }
    return params;
}
