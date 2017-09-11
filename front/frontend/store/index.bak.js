const Vue = require('vue');
const Vuex = require('vuex');
const mutations = require('./mutations');
const actions = require('./actions');
const state = require('./state');

const Messages = require('../api/messages');
const APIRoutes = require('../api/routes');
const StringUtils = require('../utils/strings');
const API = require('../api');
const request = require('superagent');

Vue.use(Vuex);

const annoset_module = {
    namespaced: true,
    state: {
        loading: false,
        success: false,
        content: [],
    },
    mutations,
    actions,
};

const frame_module = {
    namespaced: true,
    state: {
        loading: false,
        success: false,
        content: [],
    },
    mutations,
    actions,
};

const lexunit_module = {
    namespaced: true,
    state: {
        loading: false,
        success: false,
        content: [],
    },
    mutations,
    actions,
};


const store = new Vuex.Store({
    modules: {
        annoset: annoset_module,
        frame: frame_module,
        lexunit: lexunit_module,
    },
});

module.exports = store;
