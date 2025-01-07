const obj = {
  name: "pavan",
};

function printUserDetails(age, job) {
  console.log(`${this.name}-${age}-${job}`);
}

// console.log(printUserDetails.apply(obj,[23,"tester"]))

// const bind = printUserDetails.bind(obj)

// console.log(bind("23","tester"))
// console.log(bind("25","obj"))

// -------------------------------------------------------------
// call polyfill

let car = {
  color: "red",
  company: "ferarri",
};

function purchaseCar(currency, price) {
  // console.log(currency)
  console.log(`${this.color}-${this.company} - ${currency} - ${price}`);
}

Function.prototype.mycall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not a functionddddd");
  }
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myapply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw new Error("Not a functionddddd");
  }
  context.fn = this;
  context.fn(...args);
};
Function.prototype.mybind = function (context = {}, ...args) {
  //   console.log(arguments);
  if (typeof this !== "function") {
    throw new Error("Not a functionddddd");
  }
  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

// purchaseCar.mycall(car,"$","2000")

// purchaseCar.myapply(car,["$","2000"])

// const binded = purchaseCar.bind(car, "$");

// binded("2000");
// binded("5", 23);
