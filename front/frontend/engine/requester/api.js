import request from 'superagent';
import { put, takeLatest } from 'redux-saga/effects';
import messages from './messages';

function apiSend(store) {
    return (path, method, body) => {
        store.dispatch({
            type: messages.FETCH,
            method,
            path,
            body,
            sendingType: messages.REQUESTING,
            successType: messages.REQUEST_SUCCESS,
            failureType: messages.REQUEST_FAILED,
        });
    };
}

function cacheApiFetch(cache) {
    return store => next => (action) => {
        if (cache == null) {
            return next(action);
        }

        if (action.type != null && action.type === messages.FETCH) {
            if (action.path == null || action.path === '') {
                return next(action);
            }

            const cache_res = cache.hit(action.path);
            if (cache_res == null) {
                return next(action);
            }

            store.dispatch({ type: action.sendingType, entity: action.entity });
            console.log('yeaaah cache hit');
            return store.dispatch({
                type: action.successType,
                entity: action.entity,
                response: cache_res,
            });
        }
        return next(action);
    };
}


function apiFetch(cache) {
    return function* gen(object) {
        console.log('in apiFetch', cache, object);
        const { method, path, failureType, successType, sendingType, entity } = object;
        yield put({ type: sendingType, entity });


        let super_request = request[method](path)
            .set('Authorization', 'bfa3e803-217e-4f00-97ed-5f6417464484N1a-FmKtW:test');

        if ('body' in object && object.body != null && Object.keys(object.body).length > 0) {
            super_request = super_request.send(object.body);
        }

        try {
            const res = yield super_request;

            if (cache != null) {
                cache.add(path, res.body);
            }

            yield put({
                type: successType,
                entity,
                response: res.body,
            });
        } catch (err) {
            yield put({
                type: failureType,
                entity,
                response: err.response != null ? err.response.body : err,
            });
        }
        return null;
    };
}

function watchApiFetch(cache) {
    return function* gen() {
        console.log('watchApiFetch');
        yield takeLatest(messages.FETCH, apiFetch(cache));
    };
}

export default {
    watchApiFetch,
    apiSend,
    cacheApiFetch,
};
