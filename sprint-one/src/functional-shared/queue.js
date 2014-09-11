var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
  	storage: {},
  	count: 0
  };
  _.extend(instance, queueMethods);
  return instance;



};

var queueMethods = {
	enqueue: function(value){
    this.storage[this.count] = value;
    this.count++
	},
	dequeue: function(){
    var out = this.storage[0];
    if(this.count){
      for(var i = 0; i < this.count; i++){
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



