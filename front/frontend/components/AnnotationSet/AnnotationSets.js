const StoreMixin = require('../../mixins/StoreMixin');

module.exports = {
    name: 'AnnotationSets',
    mixins: [StoreMixin],
    data() {
        return {
            state: {
                hierarchy: {},
            },
        };
    },
    computed: {
        hierarchy() {
            return (idx) => {
                if (!(`${idx}` in this.state.hierarchy)) {
                    this.$set(this.state.hierarchy, `${idx}`, true);
                }
                return this.state.hierarchy[`${idx}`];
            };
        },
        has_fe_hierarchy() {
            return this.$store.state.fehierarchy.content
                && this.$store.state.fehierarchy.content.length > 0
                && Object.keys(this.$store.state.fehierarchy.content[0]).length > 0;
        },
        has_request_annoset_error() {
            return this.has_request_error('annoset');
        },
    },
    methods: {
        change_hierarchy_tab(idx, val) {
            this.$set(this.state.hierarchy, `${idx}`, val);
        },
        display_tab(tab_name) {
            this.$store.commit('display_tab', { name: tab_name, display: 'subtype' });
        },
        _process_children(node, output_tree, depth) {
            if (node.children.length > 0) {
                depth += 1;
            }
            const children = node.children.concat().sort((a, b) => a.name.localeCompare(b.name));
            children.forEach((child, idx) => {
                const tab = '|   '.repeat(depth);
                if (idx !== node.children.length - 1) {
                    output_tree = `${output_tree}${tab}├── ${child.name}\n`;
                } else {
                    output_tree = `${output_tree}${tab}└── ${child.name}\n`;
                }
                output_tree = this._process_children(child, output_tree, depth);
            });
            return output_tree;
        },
        display_fehierarchy_tree(fe_hier_node) {
            let output_tree = '';
            const children = fe_hier_node.children.concat().sort((a, b) => a.name.localeCompare(b.name));
            children.forEach((child, idx) => {
                if (idx !== fe_hier_node.children.length - 1) {
                    output_tree = `${output_tree}├── ${child.name}\n`;
                } else {
                    output_tree = `${output_tree}└── ${child.name}\n`;
                }
                output_tree = this._process_children(child, output_tree, 0);
            });
            return output_tree;
        },
    },
};
