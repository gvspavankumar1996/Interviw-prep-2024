var obj = { name: "pavan" };

function explicitBinded(a, b) {
  console.log(`${this.name} is ${a} an his age is ${b}`);
}

Function.prototype.myCall = function (context, ...args) {
  context.fn = this;

  context.fn(...args);
  delete context.fn;
};
Function.prototype.myApply = function (context, args) {
  context.fn = this;

  context.fn(...args);
  delete context.fn;
};
Function.prototype.myBind = function (context, args) {
  context.fn = this;

  context.fn(...args);
  delete context.fn;
};

console.log(explicitBinded.myCall(obj, "pavan", "23"));
console.log(explicitBinded.myApply(obj, "pavan", "23"));
const binded = explicitBinded.myBind(obj, "pavan", "23");
