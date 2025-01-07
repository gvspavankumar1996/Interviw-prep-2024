//A closure in JavaScript is a function that has access to the variables and properties of its outer function, even after the outer function has finished executing. This is because a closure is a function that is created along with references to its surrounding state, or lexical environment.

// Lexical scope in JavaScript refers to the fact that a variable's scope is determined by its location in the source code. Inner functions have access to variables defined in their outer functions because JavaScript uses static (lexical) scoping. This is determined at the time of writing, not runtime.

// 1) closure example:-

let a = 10;
function parent(b) {
  let c = 10;

  return function (d) {
    return a + b + c + d;
  };
}

const colsureFunction = parent(10);
// console.log(colsureFunction())

// ---------------------------------------------------------------------------------------

// 2) time optimization example

// function checkArrayvalue(index) {
//   let arr = [];
//   for (let i = 0; i < 10000000; i++) {
//     arr[i] = i * i;
//   }

//   return arr[index];
// }
// console.time("1200");
// console.log(checkArrayvalue(1200));
// console.timeEnd("1200");
// console.time("1100");
// console.log(checkArrayvalue(1100));
// console.timeEnd("1100");
// console.time("750");
// console.log(checkArrayvalue(750));
// console.timeEnd("750");
function checkArrayvalue() {
  let arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr[i] = i * i;
  }

  return function (index) {
    return arr[index];
  };
}

// const checkArrayValueClosure = checkArrayvalue();
// console.time("1200");
// console.log(checkArrayValueClosure(1200));
// console.timeEnd("1200");
// console.time("1100");
// console.log(checkArrayValueClosure(1600));
// console.timeEnd("1100");
// console.time("750");
// console.log(checkArrayValueClosure(750));
// console.timeEnd("750");

// ----------------------------------------------------------------------------------

// 3) write a polifill similar to once loadash where the function will execute only once

// function expensiveWork() {
//   let arr = [];
//   for (let i = 0; i < 10000000; i++) {
//     arr[i] = i * i;
//   }
//   return arr;
// }
// console.log(expensiveWork());
// console.log(expensiveWork());
// console.log(expensiveWork());

function once(func, context) {
  let ran = 0;
  return function (...args) {
    if (func) {
      func.call(context || this, ...args);
      func = null;
    } else {
      console.log(`the function ran already once`);
    }
  };
}

function expensiveWork(run) {
  // console.log(run, "run");
  let arr = [];
  for (let i = 0; i < 10000000; i++) {
    arr[i] = i * i;
  }
  return arr;
}

const callExpensiveWork = once(expensiveWork);
// callExpensiveWork(1);
// callExpensiveWork(2);
// callExpensiveWork(3);

// -------------------------------------------------------------------------------------

// 4) memoize function polyfill

// function calculate(a,b) {
//   for (let i = 0; i < 1000000000; i++) {}
//   return a*b;
// }

// console.time("1")
// console.log(calculate(10,12));
// console.timeEnd("1")
// console.time("2")
// console.log(calculate(10,12));
// console.timeEnd("2")
// console.time("3")
// console.log(calculate(10,12));
// console.timeEnd("3")
function memoize(func, context) {
  let memoizedValues = {};
  return function (...args) {
    const argsCache = JSON.stringify(args);
    if (memoizedValues[argsCache]) {
      return memoizedValues[argsCache];
    } else {
      const result = func.call(context || this, ...args);
      memoizedValues[argsCache] = result;
      return result;
    }
  };
}
function calculate(a, b) {
  for (let i = 0; i < 10000000; i++) {}
  return a * b;
}

const memoizedCalculate = memoize(calculate);
// console.time("1");
// console.log(memoizedCalculate(10, 12));
// console.timeEnd("1");

// console.time("2");
// console.log(memoizedCalculate(10, 12));
// console.timeEnd("2");

// console.time("3");
// console.log(memoizedCalculate(10, 12));
// console.timeEnd("3");

// ---------------------------------------------------------------------------