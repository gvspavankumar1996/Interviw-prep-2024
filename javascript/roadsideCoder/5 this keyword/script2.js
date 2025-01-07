//Q1

let user = {
  name: "piyush",
  age: 24,
  childObj: {
    newName: "pavan",
    getDetails: function () {
      console.log(this);
    },
  },
};

// user.childObj.getDetails()  this will refer child object

// ------------------------------------------------------------------------

let user1 = {
  name: "piyush",
  age: 24,
  getDetails: function () {
    console.log(this);
  },
};

// user1.getDetails() // this will user1 object

// ----------------------------------------------------------------------

let user2 = {
  name: "piyush",
  age: 24,
  getDetails: () => {
    console.log(this);
  },
};

// user2.getDetails(); // this will window object

// -------------------------------------------------------------------------

let user3 = {
  name: "piyush",
  age: 24,
  getDetails: function () {
    const nestedArrow = () => {
      console.log(this);
    };
    nestedArrow();
  },
};

// user3.getDetails(); // this will user3 object because the arraow function inherits this from parent function

// -------------------------------------------------------------------------------------

class user4 {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name);
  }
}

const User = new user4("piyush");

// User.getName()

// -------------------------------------------------------------------------------------

// this keyword  in js (implicit binding)

function makeUser() {
  return {
    name: "john",
    ref: this,
  };
}

let user5 = makeUser();
// console.log(user5.ref);  // this will refer window because when we call makeUser function this is referrenig parent object ie window

// how to fix this to access name
// relate ref with function

// ---------------------------------------------------------------------------

const user6 = {
  name: "pavan",
  logMessage: function () {
    // console.log(this.name);
  },
};

// user6.logMessage()
// setTimeout(user6.logMessage, 1000); // this.name will be undefined because logmessage function will be called as callback creating a copy of the function which will have access to window

// how to fix
setTimeout(function () {
  user6.logMessage();
}, 1000);
// Here, you are explicitly wrapping the call to user6.logMessage inside a new function.
// When user6.logMessage() is called, it is invoked as a method of user6. This means this will correctly refer to the user6 object.

// --------------------------------------------------------------------------------------

//

var length = 4;

function callback() {
  // console.log(this.length);
}

const object = {
  length: 5,
  method() {
    // console.log(arguments);
    arguments[0]();
  },
};
object.method(callback, 2, 3); // 3  ideally it will be expected that 4 will be printed but we have argumants as reference which also has length property hence 3 is printed

// -----------------------------------------------------------------------------------------

// Question 6: Implement this code
const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};
const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);
