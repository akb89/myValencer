const Vue = require('vue');
const Vuex = require('vuex');
const mutations = require('./mutations');
const actions = require('./actions');

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

const ent_annoset_module = {
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

const cytoframe_module = {
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

const cytolexunit_module = {
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
        cytoframe: cytoframe_module,
        cytolexunit: cytolexunit_module,
        entannoset: ent_annoset_module,
    },
});

module.exports = store;
