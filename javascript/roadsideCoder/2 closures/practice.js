let a = 10;

const parent = (b) => {
  const c = 10;
  return function (d) {
    return a + b + c + d;
  };
};

const closureFunction = parent(10);

// console.log(closureFunction(10));

// --------------------------------------------------------
// 3) write a polifill similar to once loadash where the function will execute only once

function expensiveWork() {
  let a = [];
  for (let i = 0; i <= 10000002; i++) {
    a[i] = i * i;
  }

  return function (index) {
    return a[index];
  };
}
// console.time("0")
// // console.log(optimizedFunctionCall(5))
// const optimizedFunctionCall = expensiveWork()
// console.timeEnd("0")
// console.time("1")
// console.log(optimizedFunctionCall(5))
// console.timeEnd("1")
// console.time("2")
// console.log(optimizedFunctionCall(50))
// console.timeEnd("2")
// console.time("3")
// console.log(optimizedFunctionCall(500))
// console.timeEnd("3")
// --------------------------------------------------------

//once

function once(fn, context) {
  let ran = 0;
  return function (...args) {
    if (fn) {
      fn.call(context, ...args);
      fn = null;
      console.log("fn  called", ...args);
    } else {
      console.log("fn not called", ...args);
    }
  };
}

function expensiveWork() {
  let a = [];
  for (let i = 0; i <= 10000002; i++) {
    a[i] = i * i;
  }

  console.log("result", a[0]);
  return a[0];
}

const optimizedExpensiveWork = once(expensiveWork);

// optimizedExpensiveWork(1);
// optimizedExpensiveWork(2);
// optimizedExpensiveWork(3);
// optimizedExpensiveWork(4);

// ----------------------------------------------------------

//momoize a function

function memoize(fn, context) {
  // console.log(fn)
  const memoizedCache = {};
  return function (...args) {
    const argsCache = JSON.stringify(args);
    if (memoizedCache[argsCache]) {
      console.log("returend from cache",memoizedCache)
      return memoizedCache[argsCache];
    } else {
      const result = fn.call(context, ...args);
      memoizedCache[argsCache] = result;
      console.log("returend from fn",result)
      return result;
    }
  };
}

function calculateMultiply(a, b) {
  for (let i = 0; i <= 10000002; i++) {}
  return a * b;
}

const memoizedMultiply = memoize(calculateMultiply);

console.log(memoizedMultiply(1,2))
console.log(memoizedMultiply(1,2))
console.log(memoizedMultiply(1,2))
console.log(memoizedMultiply(1,2))
