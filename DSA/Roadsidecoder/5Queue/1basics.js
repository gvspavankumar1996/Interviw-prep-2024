//stack basics
//enqueue(elem), dequeue(), peek(), isEmpty() ,size()

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    } else {
      return this.queue.shift();
    }
  }
  isEmpty() {
    return this.size() === 0;
  }
  front() {
    if (this.isEmpty()) {
      return " queue is empty";
    } else {
      return this.queue[0];
    }
  }
  size() {
    return this.queue.length;
  }
  printQueue() {
    let queueString = "";
    for (let i = 0; i < this.size(); i++) {
      queueString += this.queue[i] + ", ";
    }
    console.log(queueString);
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.printQueue()
queue.dequeue()
queue.printQueue()
queue.dequeue()
console.log(queue.dequeue())
console.log(queue.front())
queue.printQueue()
