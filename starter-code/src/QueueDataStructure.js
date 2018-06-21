function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 5;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0) {
    return true;
  } else {
    return false;
  }
};

QueueDataStructure.prototype.canEnqueue = function() {
  if (this.queueControl.length >= this.MAX_SIZE) {
    return false;
  } else {
    return true;
  }
};

QueueDataStructure.prototype.enqueue = function(element) {
  if (!this.canEnqueue()) {
    return "Queue Overflow";
  } else {
    this.queueControl.splice(0, 0, element);
    return this.queueControl;
  }
};

QueueDataStructure.prototype.dequeue = function() {
  if (this.isEmpty()) {
    return "Queue Underflow";
  } else {
    return this.queueControl.pop();
  }
};
