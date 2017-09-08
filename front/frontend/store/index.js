const Vue = require('vue');
const Vuex = require('vuex');
const mutations = require('./mutations');
const actions = require('./actions');
const state = require('./state');

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions,
});

module.exports = store;
