const InfiniteLoading = require('vue-infinite-loading').default;

module.exports = {
    name: 'LexUnits',
    data() {
        return {
            state: {
                content: [],
                infiniteSlice: 10,
                display: {
                    raw: true,
                    cluster: false,
                },
            },
        };
    },
    computed: {
        count() {
            return this.$store.state.lexunit.content.length;
        },
    },
    watch: {
        count(newCount, oldCount) {
            this.infiniteLoadMore();
        },
    },
    methods: {
        display_tab(tab_name) {
            Object.keys(this.state.display).forEach((key) => {
                if (key === tab_name) {
                    this.state.display[key] = true;
                } else {
                    this.state.display[key] = false;
                }
            });
        },
        infiniteLoadMore() {
            const store_content = this.$store.state.lexunit.content;
            const store_content_len = store_content.length;
            if (store_content_len === 0) {
                this.state.content = [];
                return;
            }

            const slice = this.state.infiniteSlice;
            const start = this.state.content.length;
            for (let i = start; i < store_content_len && i < (start + slice); i++) {
                this.state.content.push(store_content[i]);
            }

            if ('infiniteLoading' in this.$refs) {
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            }
        },
    },
    components: {
        InfiniteLoading,
    },
};
