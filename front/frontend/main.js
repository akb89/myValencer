const Vue = require('vue');
const Loader = require('./components/Loader.vue');
const LexicalUnit = require('./components/LexicalUnit.vue');
const Frame = require('./components/Frame.vue');
const AnnotationSet = require('./components/AnnotationSet/AnnotationSet.vue');
const router = require('./router');
const store = require('./store');

Vue.component('lex-unit', LexicalUnit);
Vue.component('f-frame', Frame);
Vue.component('annotation-set', AnnotationSet);
Vue.component('loader', Loader);

const App = require('./pages/app.vue');

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
});
