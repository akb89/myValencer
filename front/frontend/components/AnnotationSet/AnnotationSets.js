const InfiniteLoading = require('vue-infinite-loading').default;

module.exports = {
    name: 'AnnotationSets',
    data() {
        return {
            state: {
                content: [],
                infiniteSlice: 10,
            },
        };
    },
    computed: {
        count() {
            return this.$store.state.annoset.content.length;
        },
    },
    watch: {
        count(newCount, oldCount) {
            this.infiniteLoadMore();
        },
    },
    methods: {
        display_tab(tab_name) {
            this.$store.commit('display_tab', { name: tab_name, display: 'subtype' });
        },
        infiniteLoadMore() {
            const store_content = this.$store.state.annoset.content;
            const store_content_len = store_content.length;

            if (store_content_len === 0) {
                this.state.content = [];
                return;
            }

            const slice = this.state.infiniteSlice;
            const start = this.state.content.length;
            for (let i = start; i < store_content_len && i < (start + slice); i += 1) {
                this.state.content.push(store_content[i]);
            }
            if ('infiniteLoading' in this.$refs) {
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            }
        },
    },
    mounted() {
        this.infiniteLoadMore();
    },
    components: {
        InfiniteLoading,
    },
};
