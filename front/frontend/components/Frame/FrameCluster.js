const cytoscape = require('cytoscape');
const cycola = require('cytoscape-cola');

cytoscape.use(cycola);

module.exports = {
    name: 'FrameCluster',
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
        cy.add(this.$store.state.cytoframe.content);
        cy.style().fromJson([ // the stylesheet for the graph
            {
                selector: 'node',
                style: {
                    'background-color': '#666',
                    label: 'data(name)',
                },
            },

            {
                selector: 'edge',
                style: {
                    width: 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle',
                },
            },
        ]).update();
        cy.layout({
            name: 'cola',
            animate: true, // whether to show the layout as it's running
            refresh: 1, // number of ticks per frame; higher is faster but more jerky
            maxSimulationTime: 4000, // max length in ms to run the layout
            ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
            fit: true, // on every layout reposition of nodes, fit the viewport
            padding: 30, // padding around the simulation
            boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
            nodeDimensionsIncludeLabels: true, // whether labels should be included in determining the space used by a node (default true)

            // layout event callbacks
            ready() {}, // on layoutready
            stop() {}, // on layoutstop

            // positioning options
            randomize: false, // use random node positions at beginning of layout
            avoidOverlap: true, // if true, prevents overlap of node bounding boxes
            handleDisconnected: true, // if true, avoids disconnected components from overlapping
            nodeSpacing(node) { return 10; }, // extra spacing around nodes
            flow: undefined, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
            alignment: undefined, // relative alignment constraints on nodes, e.g. function( node ){ return { x: 0, y: 1 } }

            // different methods of specifying edge length
            // each can be a constant numerical value or a function like `function( edge ){ return 2; }`
            edgeLength: undefined, // sets edge length directly in simulation
            edgeSymDiffLength: undefined, // symmetric diff edge length in simulation
            edgeJaccardLength: undefined, // jaccard edge length in simulation

            // iterations of cola algorithm; uses default values on undefined
            unconstrIter: undefined, // unconstrained initial layout iterations
            userConstIter: undefined, // initial layout iterations with user-specified constraints
            allConstIter: undefined, // initial layout iterations with all constraints including non-overlap

            // infinite layout options
            infinite: false, // overrides all other options for a forces-all-the-time mode
        }).run();
    },
};
