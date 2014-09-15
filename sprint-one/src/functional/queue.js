// var makeQueue = function(){
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var size = 0;

//   // Implement the methods below

//   someInstance.enqueue = function(value){
//     storage[size] = value;
//     size ++
//   };

//   someInstance.dequeue = function(){
//     if(size){
//       var out = storage[0];
//       for(var i = 0; i < size; i++){
//         storage[i-1] = storage[i];
//       }
//       delete storage[-1];
//       size--;
//       return out
//     }
//   };

//   someInstance.size = function(){
//     return size;
//   };

//   return someInstance;
// };

var makeQueue = function(){
  var queue = {};
  var storage = {};
  var size =0;
  queue.enqueue = function(value){
    storage[size] = value;
    size++;
  };
  queue.dequeue = function(){
    if(size){
      for(var i =0; i < size; i++){
         storage[i-1] = storage[i];
      }
      size--;
      return storage[-1];
    }
  };
  queue.size = function(){
    return size;
  };

  return queue;
}
