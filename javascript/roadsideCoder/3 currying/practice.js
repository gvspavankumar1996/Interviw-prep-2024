// Infinite currying sum(1)(2)(3)...(n)

function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

// console.log(sum(1)(2)(3)(4)())

// ------------------------------------------------------
// Curry() implementation  f(a,b,c) ===> f(a)(b)(c)

function curry(fn) {
  return function curriedFunction(...args) {
    console.log(args.length, fn.length);
    if (args.length >= fn.length) {
        console.log(args,"args")
      return fn(...args);
    } else {
      return function (...next) {
        return curriedFunction(...args, ...next);
      };
    }
  };
}
function sumOfThree(a, b, c) {
    console.log(a,b,c,"abc")
  return a + b + c;
}

const curriedSum = curry(sumOfThree);
console.log(curriedSum(1)(2)(3));
