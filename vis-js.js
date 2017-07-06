var nodes = null;
var edges = null;
var options = null;
var network = null;

// Called when the Visualization API is loaded.
function draw() {
  // create nodes
  nodes = [
    {id: 1, label: 'black node', group: 'black'},
    {id: 2, label: 'black node', group: 'black'},
    {id: 3, label: 'black node', group: 'black'},
    {id: 4, label: 'red node', group: 'black', color: 'red'},
    {id: 5, label: 'gray node', group: 'gray'},
    {id: 6, label: 'gray node', group: 'gray'},
    {id: 7, label: 'gray node', group: 'gray'},
    {id: 8, label: 'gray node', group: 'gray'},
    {id: 9, label: 'image node', group: 'white'},
    {id: 10, label: 'image node', group: 'white'},
    {id: 11, label: 'default node'},
    {id: 12, label: 'default node'}
  ];

  // create edges
  edges = [
    {from: 1, to: 2},
    {from: 1, to: 3},
    {from: 1, to: 4},
    {from: 5, to: 6},
    {from: 5, to: 7},
    {from: 5, to: 8},
    {from: 9, to: 10},
    {from: 9, to: 11},
    {from: 9, to: 12},

    {from: 1, to: 5},
    {from: 5, to: 9},
    {from: 9, to: 1}
  ];

  // specify options
  options = {
    stabilize: false,
    edges: {
      width: 2,
      style: 'arrow',
      color: 'gray'
    },
    nodes: {
      // default for all nodes
      fontFace: 'times',
      shape: 'circle',
      color: {
        border: 'orange',
        background: 'yellow',
        highlight: {
          border: 'darkorange',
          background: 'gold'
        }
      }
    },
    physics: {barnesHut:{springLength:400}}, // this is the correct way to set the length of the springs
    groups: {
      black: {
        // defaults for nodes in this group
        radius: 3,
        color: 'black',        
        fontColor: 'white',
        fontSize: 12,
        fontFace: 'courier'
      },
      gray: {
        color: {
          border: 'black',
          background: 'gray',
          highlight: {
            border: 'black',
            background: 'lightgray'
          }
        },
        fontSize: 18,
        fontFace: 'arial',
        shape: 'circle'
      },
      white: {
        color: {
          border: 'black',
          background: 'white'
        },
        fontColor: 'red',
        shape: 'image',
        image: 'https://android-ui-utils.googlecode.com/hg-history/c6ea7998979878af070da0c363324c436e8a6e79/asset-studio/dist/res/clipart/icons/alerts_and_states_airplane_mode_off.svg'
      }
    }
  };

  // create the network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  network = new vis.Network(container, data, options);
}

draw();