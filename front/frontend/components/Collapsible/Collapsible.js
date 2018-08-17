module.exports = {
    props: {
        numberOfItems: { type: Number, required: true },
        showNthElement: { type: Number, default: -1 },
        openByDefault: { type: Boolean, default: false },
    },
    data() {
        return {
            state: {
                items: Array(this.numberOfItems).fill(this.openByDefault),
            },
        };
    },
    methods: {
        toggle(idx) {
            if (this.state.items[idx]) {
                this.$set(this.state.items, idx, false);
            } else {
                this.$set(this.state.items, idx, true);
            }
        },
    },
    mounted() {
        const nth = parseInt(this.showNthElement, 10);
        if (!isNaN(nth) && nth !== -1 && nth < this.state.items.length) {
            this.state.items[nth] = true;
        }
    },
};
