const Vue = require('vue');
const Router = require('vue-router');
const Home = require('./pages/Home/home.vue');

Vue.use(Router);

module.exports = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
    ],
});
