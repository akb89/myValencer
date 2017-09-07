import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import reducer from './reducer';
import API from './api';
import Cache from './caching';

const cache = new Cache();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(API.cacheApiFetch(cache), sagaMiddleware),
);


function* rootSaga() {
    yield all([
        API.watchApiFetch(cache)(),
    ]);
}
sagaMiddleware.run(rootSaga);

export default store;
