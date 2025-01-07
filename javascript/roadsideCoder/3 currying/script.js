// currying

// f(a , b) ----> f(a)(b)

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

// console.log(f(5)(6));
// ------------------------------------------------------------------
// sum(2)(6)(1)

function f(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(f(2)(6)(1))
// ------------------------------------------------------------------
// evaluate("add")(4)(2)
// evaluate("mul")(4)(2)
// evaluate("divide")(4)(2)
// evaluate("sub")(4)(2)

function evaluate(a) {
  return function (b) {
    return function (c) {
      if (a === "add") {
        return b + c;
      } else if (a === "mul") {
        return b * c;
      } else if (a === "divide") {
        return b / c;
      } else if (a === "sub") {
        return b - c;
      }
    };
  };
}
// console.log(evaluate("add")(4)(2))
// console.log(evaluate("mul")(4)(2))
// console.log(evaluate("divide")(4)(2))
// console.log(evaluate("sub")(4)(2))

// now you can do one more thing
// const mul= evaluate("mul")

// console.log(mul(2)(3))
// console.log(mul(2)(4))
// console.log(mul(2)(5))

// ------------------------------------------------------------------

// Infinite currying sum(1)(2)(3)...(n)

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
// console.log(add(5)(2)(4)(6)())

// -----------------------------------------------------------

// currying vs partial application

//partial application
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = sum(10);
// console.log(x(5, 6));

//currying
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(sum(10)(1)(4)());

// ---------------------------------------------------

// currying application in dom manipulation example
// function setStyle(property) {
//   return function (value) {
//     return function (element) {
//       element.style[property] = value;
//     };
//   };
// }

// // Create specific style-setting functions using currying
// const setColor = setStyle("color");
// const setFontSize = setStyle("fontSize");
// const setBackgroundColor = setStyle("backgroundColor");

// // Select DOM elements
// const heading = document.querySelector("h1");
// const paragraph = document.querySelector("p");

// // Apply styles using the curried functions
// setColor("blue")(heading); // Set color to blue for the heading
// setFontSize("24px")(paragraph); // Set font size to 24px for the paragraph
// setBackgroundColor("yellow")(heading); // Set background color to yellow for the heading

// ------------------------------------------------------------------------
// Curry() implementation  f(a,b,c) ===> f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    console.log(args,"args 1 hello")
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        console.log(next,"next hello")
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum1 = (a, b, c) => a + b + c;

const totalSum = curry(sum1);
// const res1= totalSum(1)
// console.log(res1,"res1")
// const res2= totalSum(2)
// console.log(res2,"res2")
// const res3= totalSum(3)
// console.log(res3,"res3")
console.log(totalSum(1)(2)(3));
