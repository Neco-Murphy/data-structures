var Graph = function(){
	this.storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
	//store nodes to storage
	for(var i = 0; i < arguments.length; i++){
		this.storage[arguments[i]] = {value: arguments[i], edge: []};
	}
	//check if there are only 2 nodes
	//if so, add edge
	var stock = [];
	for(var key in this.storage){
		stock.push(key);
	}
	if(stock.length === 2){
		this.addEdge(stock[0], stock[1])
	};
  //if 2 arguments are passed, add edge
	if(arguments[1] !== undefined){
    this.addEdge(newNode, toNode);
	}
};

Graph.prototype.contains = function(node){
	return this.storage[node] ? true: false;
};

Graph.prototype.removeNode = function(node){
	if(this.storage[node]){
		//delete edge of the other nodes
		var edgeTo = this.storage[node].edge;
		for(var i =0; i < edgeTo.length; i++){
		  var edgeNodeEdge = this.storage[edgeTo[i]].edge;
		  edgeNodeEdge.splice(edgeNodeEdge.indexOf(node),1);
		}
		//delete node
		delete this.storage[node];
	}
};

Graph.prototype.getEdge = function(fromNode, toNode){
	return this.storage[fromNode].edge.indexOf(toNode) !== -1 ? true:false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.storage[fromNode].edge.push(toNode);
	this.storage[toNode].edge.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var fromStock = this.storage[fromNode].edge;
	fromStock.splice(fromStock.indexOf(toNode),1);
  var toStock = this.storage[toNode].edge;
	toStock.splice(toStock.indexOf(fromNode),1);
	//remove node if it doesnt have a edge
	if(fromStock.length === 0){
		delete this.storage[fromNode];
	}
	if(toStock.length === 0){
		delete this.storage[toNode];
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
