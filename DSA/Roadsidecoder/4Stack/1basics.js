//stack basics
//push, pop, peek, isEmpty size()

class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return " stack is empty";
    } else {
      return this.stack.pop();
    }
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return " stack is empty";
    } else {
      return this.stack[this.size() - 1];
    }
  }
  size() {
    return this.stack.length;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(6);
stack.push(5);
stack.push(14);

console.log(stack.stack,stack.size(), "stack");
console.log(stack.pop(), stack.stack, "pop");
console.log(stack.peek(), stack.stack, "peek");
console.log(stack.pop(), stack.stack, "pop");
console.log(stack.peek(), stack.stack, "peek");
console.log(stack.pop(), stack.stack, "pop");
console.log(stack.peek(), stack.stack, "peek");
console.log(stack.pop(), stack.stack, "pop");
console.log(stack.peek(), stack.stack, "peek");
console.log(stack.pop(), stack.stack, "pop");
console.log(stack.isEmpty(), stack.stack, "isEmpty");
console.log(stack.stack,stack.size(), "stack");