module.exports = {
    props: {
        open: { type: Boolean, default: false },
    },
    data() {
        return {
            state: {
            },
        };
    },
    methods: {
        toggle() {
            this.$emit('collapsible-toggle', !this.open);
        },
    },
    mounted() {
    },
};
