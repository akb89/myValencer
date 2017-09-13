const cytoscape = require('cytoscape');
// const cycola = require('cytoscape-cola');
const regCose = require('cytoscape-cose-bilkent');

regCose(cytoscape); // register extension

// cytoscape.use(cycola);

function getColor(counter, colors) {
    if (counter < colors.length) {
        return { color: colors[counter], blacken: 0 };
    }
    return { color: colors[counter % colors.length], blacken: -0.3 * Math.floor(counter / colors.length) };
}

module.exports = {
    name: 'LexUnitCluster',
    props: [],
    data() {
        return {
            state: {
                cy: {},
            },
        };
    },
    mounted() {
        const cy = cytoscape({
            container: document.getElementById('cy'), // container to render in
        });
        this.state.cy = cy;
        cy.add(this.$store.state.cytolexunit.content);
        const style = [];
        const frameIDs = this.$store.state.cytolexunit.content.reduce((idset, item) => {
            if (item.data.frame && !idset.has(item.data.frame)) {
                idset.add(item.data.frame);
            }
            return idset;
        }, new Set());
        const COLORS = ['#00d1b2', '#fd9720', '#43c6fc', '#8e7dff', '#2fbbab',
            '#ffcc00', '#e00084'];
        let colorCounter = 0;
        frameIDs.forEach((id) => {
            const background = getColor(colorCounter, COLORS);
            style.push(...[{
                selector: `node[frame = ${id}]`,
                style: {
                    'background-color': background.color,
                    'background-blacken': background.blacken,
                    width: '20px',
                    height: '20px',
                    'background-opacity': 0.8,
                    label: 'data(name)',
                    color: 'white',
                },
            }, {
                selector: `edge[frame = ${id}]`,
                style: {
                    width: 3,
                    'line-color': background.color,
                    'line-style': 'solid',
                    opacity: 0.2,
                },
            }, {
                selector: 'edge[type]',
                style: {
                    width: 3,
                    'line-style': 'solid',
                    'line-color': '#999',
                    opacity: 0.2,
                },
            }]);
            colorCounter += 1;
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
            // nodeRepulsion: 4500,
 // Ideal (intra-graph) edge length
            // idealEdgeLength: 50,
            // idealEdgeLength: 100,
 // Divisor to compute edge forces
            // edgeElasticity: 0.45,
            edgeElasticity: 0.1,
 // Nesting factor (multiplier) to compute ideal edge length for inter-graph edges
            // nestingFactor: 0.1,
            nestingFactor: 0.1,
            // nestingFactor: 10,
 // Gravity force (constant)
            // gravity: 0.25,
            gravity: 0.25,
 // Maximum number of iterations to perform
            numIter: 2500,
 // Whether to tile disconnected nodes
            tile: true,
 // Type of layout animation. The option set is {'during', 'end', false}
            // animate: 'end',
            animate: false,
 // Amount of vertical space to put between degree zero nodes during tiling (can also be a function)
            tilingPaddingVertical: 10,
 // Amount of horizontal space to put between degree zero nodes during tiling (can also be a function)
            tilingPaddingHorizontal: 10,
 // Gravity range (constant) for compounds
            gravityRangeCompound: 1.5,
 // Gravity force (constant) for compounds
            // gravityCompound: 1.0,
            gravityCompound: 0.1,
 // Gravity range (constant)
            gravityRange: 3.8,
 // Initial cooling factor for incremental layout
            initialEnergyOnIncremental: 0.8,
        }).run();
    },
};
