const Vue = require('vue');
const router = require('./router');
const store = require('./store');
const AnnotationSet = require('./components/AnnotationSet/AnnotationSet.vue');
const AnnotationSets = require('./components/AnnotationSet/AnnotationSets.vue');
const Cluster = require('./components/Cluster/Cluster.vue');
const FEHierarchy = require('./components/Hierarchy/FEHierarchy.vue');
const Frame = require('./components/Frame/Frame.vue');
const Frames = require('./components/Frame/Frames.vue');
const LexUnit = require('./components/LexUnit/LexUnit.vue');
const LexUnits = require('./components/LexUnit/LexUnits.vue');
const Loader = require('./components/Loader.vue');
const Paginator = require('./components/Paginator/Paginator.vue');
const Accordion = require('./components/Accordion/Accordion.vue');

Vue.component('fn-annoset', AnnotationSet);
Vue.component('fn-annosets', AnnotationSets);
Vue.component('fn-cluster', Cluster);
Vue.component('fn-frame', Frame);
Vue.component('fn-frames', Frames);
Vue.component('fn-lexunit', LexUnit);
Vue.component('fn-lexunits', LexUnits);
Vue.component('fn-fehierarchy', FEHierarchy);
Vue.component('loader', Loader);
Vue.component('paginator', Paginator);
Vue.component('accordion', Accordion);

const App = require('./pages/app.vue');


new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
});
