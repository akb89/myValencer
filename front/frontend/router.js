import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Page1 from './pages/page1.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            name: 'Page1',
            component: Page1,
        },
    ],
});
