const Vue = require('vue');
const Vuex = require('vuex');
const _ = require('lodash');
const mutations = require('./mutations');
const actions = require('./actions');
const state = require('./state');
const mmutations = require('./module_store/mutations');
const mactions = require('./module_store/actions');
const mstate = require('./module_store/state');
const frame_state = require('./frame_store/state');

Vue.use(Vuex);

const modules_list = ['annoset', 'frame', 'cytoframe', 'cytolexunit',
    'fehierarchy', 'lexunit', 'framehierarchy'];

const module_state = {
    frame: frame_state,
};

const module_template = {
    namespaced: true,
    state: mstate,
    mutations: mmutations,
    actions: mactions,
};

const modules = modules_list.reduce((obj, module) => {
    const template = _.cloneDeep(module_template);
    if (module in module_state) {
        template.state = _.merge({}, template.state, module_state[module]);
    }

    obj[module] = template;
    return obj;
}, {});

const store = new Vuex.Store({
    modules,
    state,
    actions,
    mutations,
});

module.exports = store;
