var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(!list.head){
      list.head = newNode;
      list.tail = newNode;
    } else{
      var prevNode = list.tail;
      list.tail = newNode;
      prevNode.next = list.tail;
    }
  };

  list.removeHead = function(){
    if(list.head){
      var out = list.head.value;
      var nextNode = list.head.next;
      list.head = nextNode;
      return out;
    }
  };

  list.contains = function(target){
    // if(!list.head){
    //   return false;
    // }
    var result = false;
    var check = function(node){
      if(node.value === target){
         result = true;
         return result;
      };
      if(node.next){
        check(node.next);
      }else{
        return result;
      }
    };
    check(list.head);
    return result; 
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
