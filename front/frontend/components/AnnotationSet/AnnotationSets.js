module.exports = {
    name: 'AnnotationSets',
    data() {
        return {
        };
    },
    methods: {
        display_tab(tab_name) {
            this.$store.commit('display_tab', { name: tab_name, display: 'subtype' });
        },
        _process_children(node, output_tree, depth) {
            if (node.children.length > 0) {
                depth += 1;
            }
            node.children.sort((a, b) => a.name.localeCompare(b.name));
            node.children.forEach((child, idx) => {
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
            fe_hier_node.children.sort((a, b) => a.name.localeCompare(b.name));
            fe_hier_node.children.forEach((child, idx) => {
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
