const Vue = require('vue');
const router = require('./router');
const store = require('./store');
const AnnotationSet = require('./components/AnnotationSet/AnnotationSet.vue');
const AnnotationSets = require('./components/AnnotationSet/AnnotationSets.vue');
const Frame = require('./components/Frame/Frame.vue');
const Frames = require('./components/Frame/Frames.vue');
const FrameCluster = require('./components/Frame/FrameCluster.vue');
const LexUnit = require('./components/LexUnit/LexUnit.vue');
const LexUnits = require('./components/LexUnit/LexUnits.vue');
const LexUnitCluster = require('./components/LexUnit/LexUnitCluster.vue');
const Loader = require('./components/Loader.vue');


Vue.component('fn-annoset', AnnotationSet);
Vue.component('fn-annosets', AnnotationSets);
Vue.component('fn-frame', Frame);
Vue.component('fn-frames', Frames);
Vue.component('fn-frame-cluster', FrameCluster);
Vue.component('fn-lexunit', LexUnit);
Vue.component('fn-lexunits', LexUnits);
Vue.component('fn-lexunit-cluster', LexUnitCluster);
Vue.component('loader', Loader);

const App = require('./pages/app.vue');

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
});
