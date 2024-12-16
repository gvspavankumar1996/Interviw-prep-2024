function makeFunc() {
  var name = "hello";

  function displayName() {
    // console.log(name)
  }
  return displayName;
}

var myFunc = makeFunc();

myFunc();

// ----------------------------------------------------------

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// }

//time optimized using closure
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function getValue(index) {
    console.log(a[index]);
  };
}

// console.time("find");
// const closure = find();
// console.timeEnd("find");
// console.time("6");
// closure(6);
// console.timeEnd("6");

// console.time("150");
// closure(454);
// console.timeEnd("150");

// console.time("2");
// closure(2);
// console.timeEnd("2");
// ----------------------------------------------------------

// Once polyfill similar to loadash(this means a function should only run once)

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    console.log(ran);
    return ran;
  };
}

const hello = once(() => {
  console.log("hello");
});
// hello();
// hello();
// hello();
// hello();
// ----------------------------------------------------------

// memoize polyfill
let memoizedData={}
const clumsySquare = (num1,num2) => {
  for (let i = 0; i <= 100000000; i++) {
  }
  return num1 * num2;
};


console.time("1");
clumsySquare(9467,7564)
console.timeEnd("1");
console.time("2");
clumsySquare(9467,7564)
console.timeEnd("2");