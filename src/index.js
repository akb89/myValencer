'use strict';

const riot = require('riot');
const redux = require('redux');
//const riot = 'riot'; // FIXME should work with webpack ProvidePlugin

//require('./style/css/nest.css');
//require('./style/css/normalize.css');
//require('./style/javascript/nest');

require('riot-mui');
//require('bulma');

const home = require('./tags/home.tag');
//require('./tags/search.tag');
//require('./tags/logo.tag');
//require('../examples/demos.tag');
//require('./tags/test.tag');
const main = require('./tags/main.tag');
//require('./tags/material-button.tag');

const reducer = (state={title:'Default Title'}, action) => {
    console.log(action);
    switch (action.type){
        case 'CHANGE_TITLE':
            return Object.assign({}, state, {title: action.data});
        default:
            return state;
    }
};

var reduxStore = redux.createStore(reducer);


document.addEventListener('DOMContentLoaded', () => {
    riot.mount(main, {store: reduxStore});
});