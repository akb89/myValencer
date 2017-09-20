const cytoscape = require('cytoscape');
const regCose = require('cytoscape-cose-bilkent');

regCose(cytoscape); // register extension


const RELATION_COLORS = {
    Inheritance: '#00d1b2',
    Subframe: '#fd9720',
    Using: '#43c6fc',
    See_also: '#',
    ReFraming_Mapping: '#8e7dff',
    Inchoative_of: '#2fbbab',
    Causative_of: '#ffcc00',
    Precedes: '#e00084',
    Perspective_on: '#3366ff',
    Metaphor: '#ff0033',
};

const NODE_COLORS = ['#00d1b2', '#fd9720', '#43c6fc', '#8e7dff', '#2fbbab',
    '#ffcc00', '#e00084'];

const blackenThreshold = 0.20;

function getNodeColor(colorCounter, blackenCounter) {
    return {
        color: NODE_COLORS[colorCounter],
        blacken: -0.8 + (blackenThreshold * blackenCounter),
    };
}

function displayCluster(cytoframes) {
    const cy = cytoscape({
        container: document.getElementById('cy'), // container to render in
    });
    cy.add(cytoframes);
    const style = [];
    const relationTypes = [];
    const nodes = [];
    cytoframes.forEach((item) => {
        if (item.data.type) relationTypes.push(item.data.type);
        if (item.data.name) nodes.push(item);
    });
    relationTypes.forEach((relationType) => {
        const relationColor = RELATION_COLORS[relationType];
        style.push(...[{
            selector: `edge[type = '${relationType}']`,
            style: {
                width: 2,
                'curve-style': 'bezier',
                'line-color': relationColor,
                'line-style': 'solid',
                opacity: 0.4,
            },
        }]);
    });
    let colorCounter = 0;
    let blackenCounter = 0;
    nodes.forEach((node) => {
        const background = getNodeColor(colorCounter, blackenCounter);
        style.push({
            selector: `node[id = "${node.data.id}"]`,
            style: {
                'background-color': background.color,
                'background-blacken': -0.5,
                width: '20px',
                height: '20px',
                'background-opacity': 0.7,
                label: 'data(name)',
                color: background.color,
                opacity: 0.9,
            },
        });
        colorCounter += 1;
        if (colorCounter === NODE_COLORS.length) {
            colorCounter = 0;
            blackenCounter += 1;
        }
    });

    cy.on('mouseover', 'edge', (event) => {
        const edge = event.target;
        cy.style().selector(`edge[id = '${edge.id()}']`).style({
            opacity: 1,
            label: 'data(type)',
            color: 'white',
            'text-rotation': 'autorotate',
            'text-margin-y': '-15px',
        }).update();
    });
    cy.on('mouseout', 'edge', (event) => {
        const edge = event.target;
        cy.style().selector(`edge[id = '${edge.id()}']`).style({ opacity: 0.4, label: '' }).update();
    });
    cy.on('mouseover', 'node', (event) => {
        const edge = event.target;
        cy.style().selector(`node[id = '${edge.id()}']`).style({
            opacity: 1,
            // color: 'white',
        }).update();
    });
    cy.on('mouseout', 'node', (event) => {
        const edge = event.target;
        cy.style().selector(`node[id = '${edge.id()}']`).style({ opacity: 0.9 }).update();
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
        padding: 30,
  // Whether to enable incremental mode
        randomize: false,
  // Node repulsion (non overlapping) multiplier
        nodeRepulsion: 100000,
  // nodeRepulsion: 4500,
  // Ideal (intra-graph) edge length
        idealEdgeLength: 150,
  // idealEdgeLength: 100,
  // Divisor to compute edge forces
        edgeElasticity: 0.45,
        // edgeElasticity: 0.1,
  // Nesting factor (multiplier) to compute ideal edge length for inter-graph edges
        nestingFactor: 0.1,
        // nestingFactor: 100,
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
}

module.exports = {
    name: 'Cluster',
    props: [],
    mounted() { displayCluster(this.$store.state.cytoframe.content); },
    updated() { displayCluster(this.$store.state.cytoframe.content); },
};
