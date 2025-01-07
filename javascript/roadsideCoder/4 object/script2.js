// 1) what is the output of the following

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

// console.log(a[b])   // 456

// reason :- because a object cannot be stored as a key
// it is stored as
// a["[object object"] = 123
// a["[object object"] = 456

// ----------------------------------------------------------------
// Q2 guess the output

let person = { name: "majunu" };
const members = [person];
person = null;
// console.log(members) // [{name:"majunu"}]

// Variables like person are references to objects in memory, not the objects themselves.
// When you assign person to null, you only change the reference stored in the person variable, not the actual object.
// The members array keeps its reference to the original object, so the object remains accessible through the array.

// ----------------------------------------------------------------------------

// Q3) Shallow copy vs deepcopy

let user = {
  name: "Roadside coder",
  age: 24,
};

// const objectClone = Object.assign({},user);
// const objectClone = JSON.parse(JSON.stringify(user))
const objectClone = { ...user };

// console.log(objectClone);
