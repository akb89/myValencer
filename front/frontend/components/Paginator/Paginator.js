module.exports = {
    name: 'Paginator',
    props: ['numberOfItems', 'itemsPerPage', 'skip'],
    data() {
        return {
            state: {
                firstPage: 1,
                currentPage: 1,
                lastPage: 1,
            },
        };
    },
    mounted() {
        this.state.lastPage = Math.ceil(this.numberOfItems / this.itemsPerPage);
        this.state.currentPage = parseInt((this.skip + this.itemsPerPage) / this.itemsPerPage, 10);
    },
    watch: {
        numberOfItems(newNumber) {
            this.state.lastPage = Math.ceil(newNumber / this.itemsPerPage);
        },
        skip(newNumber) {
            this.state.currentPage = parseInt((newNumber + this.itemsPerPage)
                / this.itemsPerPage, 10);
        },
    },
    methods: {
        goto(page, e) {
            e.preventDefault();
            this.state.currentPage = page;
            const skip = (this.state.currentPage - 1) * this.itemsPerPage;
            this.$emit('page-change', page, skip);
        },
    },
};
