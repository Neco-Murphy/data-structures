var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.count = 0;
  return queue;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.count] = value;
    this.count++
  },
  dequeue: function(){
    if(this.count){
      var out = this.storage[0];
      for(var i =0; i < this.count; i++){
        this.storage[i-1] = this.storage[i];
      }
      this.count--;
      return out;
    }
  },
  size: function(){
    return this.count;
  }
};


