// Currying is a functional programming technique in JavaScript that breaks down a function that takes multiple arguments into a series of functions that each take a single argument:
// Explanation
// Currying transforms a function like f(a, b, c) into f(a)(b)(c).
// Benefits
// Currying can help you:
// Avoid passing the same variable multiple times
// Create reusable functions
// Create partially applied functions
// Encourage code composition

// Infinite currying sum(1)(2)(3)...(n)

function currySum(a) {
  return function (b) {
    if (b) return currySum(a + b);
    return a;
  };
}

// console.log(currySum(1)(2)(3)());

// -------------------------------------------------------------------------------------

// Curry() implementation  f(a,b,c) ===> f(a)(b)(c)

function convertToCurry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curried(...args, ...next);
      };
    }
  };
}

function sum1(a, b, c) {
  return a + b + c;
}

const curriedFunction = convertToCurry(sum1);

console.log(curriedFunction(1)(2)(3));
