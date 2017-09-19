const cytoscape = require('cytoscape');
const regCose = require('cytoscape-cose-bilkent');

regCose(cytoscape); // register extension

function getColor(relationType, colors, relationsColorMap) {
    if (relationsColorMap.has(relationType)) {
        return relationsColorMap.get(relationType);
    }
    relationsColorMap.set(relationType, colors[relationsColorMap.size]);
    return colors[relationsColorMap.size];
}


module.exports = {
    name: 'Cluster',
    props: [],
    mounted() {
        const cy = cytoscape({
            container: document.getElementById('cy'), // container to render in
        });
        console.log(JSON.stringify(this.$store.state.cytoframe.content));
        cy.add(this.$store.state.cytoframe.content);
        const style = [];
        const relationTypes = this.$store.state.cytoframe.content.reduce((items, item) => {
            if (item.data.type) items.push(item.data.type);
            return items;
        }, []);
        const COLORS = ['#3366ff', '#a6e22d', '#fd9720', '#43c6fc', '#ff0033', '#8e7dff', '#2fbbab',
            '#ffcc00', '#e00084', '#ffff00']; // There are max 10 frame relations: 1 color each
        const relationsColorMap = new Map();
        relationTypes.forEach((relationType) => {
            console.log(JSON.stringify(relationType));
            const color = getColor(relationType, COLORS, relationsColorMap);
            style.push(...[{
                selector: `edge[type = '${relationType}']`,
                style: {
                    width: 2,
                    'line-color': color,
                    'line-style': 'solid',
                    opacity: 0.8,
                },
            }]);
        });
        style.push({
            selector: 'node',
            style: {
                'background-color': 'orange',
                width: '20px',
                height: '20px',
                'background-opacity': 0.6,
                label: 'data(name)',
                color: 'white',
            },
        });
        cy.style().fromJson(style).update();

        cy.layout({
            name: 'cose-bilkent',
        // Called on `layoutready`
            ready() {
            },
        // Called on `layoutstop`
            stop() {
            },
        // Whether to include labels in node dimensions. Useful for avoiding label overlap
            nodeDimensionsIncludeLabels: true,
        // number of ticks per frame; higher is faster but more jerky
            refresh: 30,
        // Whether to fit the network view after when done
            fit: true,
        // Padding on fit
            padding: 10,
        // Whether to enable incremental mode
            randomize: false,
        // Node repulsion (non overlapping) multiplier
            nodeRepulsion: 4500,
        // nodeRepulsion: 45000,
        // Ideal (intra-graph) edge length
            idealEdgeLength: 50,
        // idealEdgeLength: 100,
        // Divisor to compute edge forces
            edgeElasticity: 0.45,
        // Nesting factor (multiplier) to compute ideal edge length for inter-graph edges
            nestingFactor: 0.1,
        // Gravity force (constant)
            gravity: 0.25,
        // Maximum number of iterations to perform
            numIter: 2500,
        // Whether to tile disconnected nodes
            tile: true,
        // Type of layout animation. The option set is {'during', 'end', false}
        // animate: 'end'
            animate: false,
        // Amount of vertical space to put between degree zero nodes during tiling (can also be a function)
            tilingPaddingVertical: 10,
        // Amount of horizontal space to put between degree zero nodes during tiling (can also be a function)
            tilingPaddingHorizontal: 10,
        // Gravity range (constant) for compounds
            gravityRangeCompound: 1.5,
        // Gravity force (constant) for compounds
            gravityCompound: 1.0,
        // gravityCompound: 0.1,
        // Gravity range (constant)
            gravityRange: 3.8,
        // Initial cooling factor for incremental layout
            initialEnergyOnIncremental: 0.8,
        }).run();
    },

};
