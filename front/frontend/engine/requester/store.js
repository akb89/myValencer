import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducer';
import APIMiddleware from './api_middleware';

const defaultState = {
    objects: [],
    object: {},
    message: {},
};

export default createStore(Reducer, defaultState, applyMiddleware(APIMiddleware));
