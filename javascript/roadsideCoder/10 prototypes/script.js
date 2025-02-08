//prototype chaining
let person = {
  name: "Piyush Agarwal",
  age: 25,
  // toString: () => {
  // console.log("converts to string");
  // },
};
let additional = {
  name: "Piyush",
  username: "RoadsideCoder",

  alias: function () {
    console.log(`${this.name} is also known as ${this.username}`);
  },
};

person._proto = additional;
// console.log(person.alias());

// --------------------------------------------------
// Ques 1: What will be the output of the following code?
function Vehicle() {}
Vehicle.prototype.drive = function () {
  console.log("Driving a vehicle");
};
function Car() {}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.drive = function () {
  console.log("Driving a car");
};
var vehicle = new Vehicle();
var car = new Car();
// vehicle.drive();
// car.drive();

// ----------------------------------------------------------
// Ques 2: Explain the difference between _proto_ and prototype in JavaScript.
// ** _proto_**: It is an object property that points to the prototype of the object
// It is used for inheritance and allows accessing the prototype chain
// ***prototype***: It is a property that exists on constructor functions and is used to
// set up inheritance for objects created by that constructor function.
// It defines properties and methods shared by all instances created by that constructor function

// ----------------------------------------------------------

// Ques 3: Deep cloning object

var obj2 = {
  a: 1,
  b: {
    c:{
      e:2
    },
    d: [3, 4],
  },
};

// var clonedObj = JSON.parse(JSON.stringify(obj2));
// clonedObj.a=3;
// clonedObj.b.c.e=3;



// JSON, react, redux


