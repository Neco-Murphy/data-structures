var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
	if(!this.children){
    this.children = [];
	}
	this.children.push(makeTree(value));

};

treeMethods.contains = function(target){
	var result = false;
  var check = function(tree){
    if(tree.value === target){
    	result = true;
    	return result;
    }
    if(tree.children){
      for(var i = 0; i < tree.children.length; i++){
      	check(tree.children[i]);
      }
    }
  }
  check(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
