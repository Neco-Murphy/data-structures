// var makeBinarySearchTree = function(value){
// 	var newTree = Object.create(makeBinarySearchTreeMethods);
// 	newTree.value = value;
//   newTree.left = undefined;
//   newTree.right = undefined;
// 	return newTree;
// };

// var makeBinarySearchTreeMethods = {};


// makeBinarySearchTreeMethods.insert = function(num){
//   var newTree = makeBinarySearchTree(num);
//   var root = this;
//   var check = function(tree){
//   	if(num < tree.value){
//   		if(!tree.left){
//       	tree.left = newTree;
//   		}else{
//   			check(tree.left);
//   		}
//   	}else{
//   		if(!tree.right){
//       	tree.right = newTree;
//   		}else{
//   			check(tree.right);
//   	  }
//     };
//   };
//  check(root);
// };

// makeBinarySearchTreeMethods.contains = function(){
	  // var result = false;
   //  var root = this;
   //  var check = function(tree){
   //  	if(tree.value === target){
   //  		result = true;
   //  	}else{
  	//     if(target < tree.value){
  	// 	    if(tree.left){
  	// 		    check(tree.left);
  	// 		  }
  	//     }else{
  	// 	    if(tree.right){
  	// 	    	check(tree.right);
   //    	  }
  	// 	  }
  	//   }
   //  };
   //  check(root);
   //  return result;
// };

// makeBinarySearchTreeMethods.depthFirstLog = function(){
	
// };

var makeBinarySearchTree = function(value){
	var binarySearchTree = {};
	binarySearchTree.value = value;
  binarySearchTree.left = undefined;
  binarySearchTree.right = undefined;
  binarySearchTree.insert = function(num){
    var newTree = makeBinarySearchTree(num);
    var root = this;
    var ins = function(tree){
  	if(num < tree.value){
  		if(!tree.left){
      	tree.left = newTree;
  		}else{
  			ins(tree.left);
  		}
  	}else{
  		if(!tree.right){
      	tree.right = newTree;
  		}else{
  			ins(tree.right);
  	  }
    };
  };
   ins(root);
  };
  binarySearchTree.contains = function(target){
    var result = false;
    var root = this;
    var check = function(tree){
    	if(tree.value === target){
    		result = true;
    	}else{
  	    if(target < tree.value){
  		    if(tree.left){
  			    check(tree.left);
  			  }
  	    }else{
  		    if(tree.right){
  		    	check(tree.right);
      	  }
  		  }
  	  }
    };
    check(root);
    return result;
  };
  binarySearchTree.depthFirstLog = function(func){
    func(this.value);
    if(this.left){
    	this.left.depthFirstLog(func);
    }
    if(this.right){
       this.right.depthFirstLog(func);
    }
  };
	return binarySearchTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
