

// Instantiate a new graph
var Graph = function() {
  this.container = {
    // value: {2 : true, 5 : true}
    //2 : {3 : true},
    //1 : {},
    //3 : {2 : true}
  };
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.container[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.container[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  console.log(this);
  delete this.container[node];
  // var disconnect = function (key) {
  //   if (this.container[key][node]) {
  //     delete this.container[key][node];
  //   }
  // };
  // this.forEachNode(disconnect);
  for (var key in this.container) {
    if (this.container[key][node]) {
      delete this.container[key][node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.container[fromNode][toNode] !== undefined;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.container[fromNode] && this.container[toNode]) {
    this.container[fromNode][toNode] = true;
    this.container[toNode][fromNode] = true;  
    return true;
  }
  return false;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.container[fromNode] && this.container[toNode]) {
    delete this.container[fromNode][toNode];
    delete this.container[toNode][fromNode];  
    return true;
  }
  return false;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //for each key in our container do the cb
  for (var key in this.container) {
    cb(key);
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


