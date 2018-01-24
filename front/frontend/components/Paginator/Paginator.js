const APIRoutes = require('../../api/routes');
const StringUtils = require('../../utils/strings');

module.exports = {
    name: 'Paginator',
    props: ['numberOfItems', 'itemsPerPage', 'display', 'skip'],
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
            this.state.currentPage = parseInt((newNumber + this.itemsPerPage) / this.itemsPerPage, 10);
        },
    },
    methods: {
        goto(page, e) {
            e.preventDefault();
            this.state.currentPage = page;
            this.$store.dispatch(`${this.display.toLowerCase()}/call_api`, { method: 'GET',
                path: StringUtils.format_with_obj(APIRoutes[`${this.display}S`],
                    { id: this.$store.state.queries.current,
                        skip: (this.state.currentPage - 1) * this.itemsPerPage,
                        limit: this.itemsPerPage }) });
        },
    },
};
