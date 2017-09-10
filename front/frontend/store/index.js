const Vue = require('vue');
const Vuex = require('vuex');
const mutations = require('./mutations');
const actions = require('./actions');
const state = require('./state');

Vue.use(Vuex);

const annoset_module = {
    namespaced: true,
    state: {
        loading: false,
        success: false,
        content: [],
    },
    getters: {
        displacy_annosets: state => state.content,
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
    getters: {
        cytoscape_frames: state => state.content,
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
    getters: {
        cytoscape_lexunits: state => state.content,
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
