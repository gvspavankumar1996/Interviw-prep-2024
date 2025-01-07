// call apply bind are known as explicit binding since we explicitly bind reference and call a function

// call and apply function is executed immediately while bind returns the function that can be executed later
var obj = { name: "pavan" };

function explicitBinded(a, b) {
  console.log(`${this.name} is ${a} an his age is ${b}`);
}

// explicitBinded.call(obj, "good boy", 28);
// explicitBinded.apply(obj, ["good boy", 28]);
// const bindFunction = explicitBinded.bind(obj);

// bindFunction("good boy", 28);
// bindFunction("bad boy", 25);

// -----------------------------------------------------------------

// Question 5 - Call with function inside object
const age = 10;
var person = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
// console.log(person.getAge.call(person2)); // 24 although we are calling getAge with person obj context later we are explicitly binding person2 object hence 24 is printed

// -------------------------------------------------------------------------------

// Question 6 What is the output?
var value = "a";
setTimeout(() => {
  const value = "b ";
  const data = {
    value: "c",
    getStatus() {
      return this.value;
    },
  };
  // console.log(data.getStatus());
  // console.log(data.getStatus.call(this));
}, 0);

// -----------------------------------------------------------------
// Question 8 - Append an array to another array

const array = ["a", "b", "c"];
const elements = [1, 2, 3];
array.push.apply(array, elements);
// console.log(array);

// ----------------------------------------------------------------------------
// Find min/max number ijn a array

const numbers = [2, 5, 3, 8, 10, 34, 22, 11, 6];

// console.log(Math.max.apply(null, numbers));
// console.log(Math.min.apply(null, numbers));

//better way my implementation

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// --------------------------------------------------------------------------------

function f() {
  console.log(this.name);
}
f = f.bind({ name: "John" }).bind({ name: "Ann" });
// f() // it will print John since once a function is binded with an object we cannot change it

// -------------------------------------------------------------------------------------------

//fix last line to make code work properly
function checkPassword(success, failed) {
  let password = prompt("Password?", "");
  if (password == "Roadside Coder") success();
  else failed();
}

let user = {
  name: "Piyush Agarwal",

  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },
  loginFailed() {
    console.log(`${this.name} failed to log in`);
  },
};
// checkPassword.call(user,user.loginSuccessful, user.loginFailed);
// checkPassword.call(user,user.loginSuccessful.bind(user), user.loginFailed.bind(user)); solution

// --------------------------------------------------------------------
function checkPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "Roadside Coder") ok();
  else fail();
}
let user1 = {
  name: "Piyush Agarwal",
  login(result) {
    console.log(this.name + (result ? "login successful" : "login failed"));
  },
};
// checkPassword(user1.login.bind(user1, true), user1.login.bind(user1, false));

// ----------------------------------------------------------------------
const age1 = 10;
var person = {
  name: "Piyush",
  age1: 20,
  getAgeArrow: () => console.log(this.age1),
  getAge: function () {
    console.log(this.age1);
  },
};
var person2 = { age1: 24 };
// person.getAge.call(person2); // ? 24
// person.getAgeArrow.call(person2); // ?undefined

// we cannot manipulate arrow function using call appy bind it only takes this of parent function's context

// --------------------------------------------------------------------------------

// polyfill for call

var obj = { name: "pavan" };

function explicitBinded(character, age) {
  console.log(`${this.name} is ${character} an his age is ${age}`);
}

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("this is not callable");
  }
  
  context.fn = this;

  context.fn(...args)
  delete context.fn
};
// Function.prototype.myCall = function (context, ...args) {
//     console.log(this, "this");
//     console.log(context, "context");
//     console.log(args, "args");
//     // this={...this,...context}
//     // const functionValue = this;
//     context = {
//         ...context,
//         funcCall:this
//         };
//         context.funcCall(...args);
//       };
      explicitBinded.myCall(obj, "good boy", 28);
      const uniqueKey = Symbol('tempFunc'); 
      console.log(uniqueKey,"obj")
