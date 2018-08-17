module.exports = {
    name: 'FEHierarchy',
    props: {
        feh: { type: Object, required: true },
        idx: { type: Number, required: true },
    },
    methods: {
        display_fehierarchy_tree(fe_hier_node) {
            let outputTree = fe_hier_node.name;
            fe_hier_node.children.forEach((child) => {
              outputTree = `{outputTree}\n`;
              // outpuTree =
            });
            return outputTree;
        },
    },
};
