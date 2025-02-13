//1)memoization

// function memoize(fn) {
//   const memoizedCache = {};
//   return function (...args) {
//     const stringyFied = JSON.stringify(args);
//     if (memoizedCache[stringyFied]) {
//       return memoizedCache[stringyFied];
//     }
//     memoizedCache[stringyFied] = fn(...args);
//     return memoizedCache[stringyFied];
//   };
// }

// function factorialN(n) {
//   for (let i = 0; i < 100000000; i++) {}
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// const factorial = memoize(factorialN);
// console.time("start");
// console.log(factorial(10));
// console.timeEnd("start");
// console.time("start1");
// console.log(factorial(10));
// console.timeEnd("start1");

// ------------------------------------------------------------------

// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("pavan1");
//   }, 1000);
// });
// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("pavan2");
//   }, 2000);
// });
// const promise3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("pavan3");
//   }, 3000);
// });
// const myAny = function (promisesArr) {
//   let promiseErrors = [];
//   let counter = 0;
//   return new Promise((resolve, reject) => {
//     for (promise of promisesArr) {
//       promise
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((err) => {
//           promiseErrors[counter] = err;
//           counter++;
//           if (promiseErrors.length === promisesArr.length) {
//             reject(promiseErrors);
//           }
//         });
//     }
//   });
// };
// const myRace = function (promisesArr) {
//   // let promiseErrors=[];
//   // let counter=0;
//   return new Promise((resolve, reject) => {
//     for (promise of promisesArr) {
//       promise
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//   });
// };

// const myAll = function (promisesArr) {
//   let result = [];
//   let taskCompleted = 0;
//   return new Promise((resolve, reject) => {
//     for (promise of promisesArr) {
//       promise
//         .then((res) => {
//           // resolve(res);
//           result[taskCompleted] = res;
//           taskCompleted++;
//           if (taskCompleted === promisesArr.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//   });
// };

// myAll([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));

// Promise.race([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));

// custom promise
// function CustomPromise(executor) {
//   let onReject,
//     onResolve,
//     isCalled = false,
//     isFullfilled = false,
//     isrejected = false,
//     value;
//   function resolve(val) {
//     isFullfilled = true;
//     if (typeof onResolve === "function") {
//       isCalled = true;
//       onResolve(val);
//     } else {
//       value = val;
//     }
//   }
//   function reject(val) {
//     isrejected = true;
//     if (typeof onResolve === "function") {
//       isCalled = true;
//       onReject(val);
//     } else {
//       value = val;
//     }
//   }
//   this.then = function (callback) {
//     onResolve = callback;
//     if (isFullfilled && !isCalled) {
//       onResolve(value);
//     }
//     return this;
//   };
//   this.catch = function (callback) {
//     onReject = callback;
//     if (isrejected && !isCalled) {
//       onReject(value);
//     }
//     return this;
//   };

//   executor(resolve, reject);
// }

// const promise4 = new CustomPromise((resolve, reject) => {
//   // setTimeout(() => {
//   resolve("pavan");
//   // }, 100);
// });

// promise4
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// -------------------------------------------------------------

//debounce //throlttle

const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
function throttle(cb, delay = 1000) {
  let shouldWait = false
  return (...args) => {
    if(shouldWait) return
    cbb(...args)

    setTimeout(()=>{

    },delay)
  };
}

const debouncedText = debounce((text) => {
  debounceText.innerHTML = text;
}, 1000);
const throttledText = throttle((text) => {
  throttleText.innerHTML = text;
}, 1000);


input.addEventListener("input", function (e) {
  defaultText.innerHTML = e.target.value;
  debouncedText(e.target.value);
  throttledText(e.target.value);
});
