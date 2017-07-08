import request from 'superagent';

export const API_CALL = Symbol('API_CALL');

export default store => next => (action) => {
    if (!action[API_CALL]) {
        return next(action);
    }
    const req = action[API_CALL];
    const { method, path, failureType, successType, sendingType, entity } = req;
    store.dispatch({ type: sendingType, entity });

    let super_request = request[method](path)
        .set('Authorization', 'bfa3e803-217e-4f00-97ed-5f6417464484N1a-FmKtW:test');
    if ('body' in req) {
        super_request = super_request.send(req.body);
    }

    super_request.end((err, res) => {
        if (err) {
            store.dispatch({
                type: failureType,
                entity,
                response: err.response != null ? err.response.body : err,
            });
        } else {
            store.dispatch({
                type: successType,
                entity,
                response: res.body,
            });
        }
    });
    return null;
};
