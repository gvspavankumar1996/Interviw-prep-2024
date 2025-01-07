// Promises in Javascript

// Callbacks
// console.log("start");
// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`Subscribe to ${username}`);
//   }, 0);
// }
// function likeTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Like the ${video} video`);
//   }, 0);
// }
// function shareTheVideo(share, cb) {
//   setTimeout(() => {
//     cb(`share the ${share} video`);
//   }, 0);
// }
// importantAction("Roadside Coder", function (message) {
//   console.log(message);
//   likeTheVideo("Roadside Coder vide0s", function (action) {
//     console.log(action);
//     shareTheVideo("Roadside Coder vide0s", function (share) {
//       console.log(share);
//     });
//   });
// });
// console.log("stop");

// --------------------------------------------------------------

// promises

// console.log("start");
function importantAction(username, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 0);
  });
}
function likeTheVideo(video, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 0);
  });
}
function shareTheVideo(share, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share the ${share} video`);
    }, 1110);
  });
}
// this is promise chanining approach
// importantAction("Roadside Coder")
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo("Javascript Interview Questions");
//   })
//   .then((res) => {
//     console.log(res);
//     return shareTheVideo("Javascript Interview Questions");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));

// ------------------------------------------------------------

// promise combinators

//runs all promises passed, if any one failed will show which promise failed ans also fails all promises
// Promise.all([
//   importantAction("Roadside Coder"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions"),
// ]).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.error(err,"err")
// })

// -------------------------------------------------------------------------

//returns the first promise that gets fulfilled or rejected
// Promise.race([
//   importantAction("Roadside Coder"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions"),
// ]).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.error(err,"err")
// })

// --------------------------------------------------------------------------------

//returns all fulfilled and rejected promises  with status in array
// Promise.allSettled([
//   importantAction("Roadside Coder"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions"),
// ]).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.error(err,"err")
// })
// --------------------------------------------------------------------------------

//returns the first fulfilled promise and ignores rejected promise, will go to catch only when all promises fail
// Promise.any([
//   importantAction("Roadside Coder"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions"),
// ]).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.error(err,"err")
// })

// ------------------------------------------------------------------------------------------

// Async Await

// const result = async () => {
//   try {
//     const message1 = await importantAction("Roadside Coder");
//     const message2 = await likeTheVideo("Roadside Coder");
//     const message3 = await shareTheVideo("Roadside Coder");

//     console.log({ message1, message2, message3 });
//   } catch (error) {
//     console.error("Promises failed", error);
//   }
// };

// result();

// console.log("stop");

// -----------------------------------------------------------------------------

// Promises in Javascript
// Ques 1 What's the output?
// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });
// promise1.then((res) => {
//   console.log(res);
// });
// console.log("end");
// start 1 end 2 output

// ---------------------------------------------------------------------------------

// Promises in Javascript
// Ques 2 What's the output?
// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3)
// });
// promise1.then((res) => {
//   console.log(res);
// });
// console.log("end");

// start 1 3 end 2

// -----------------------------------------------------------------------------------------

// Promises in Javascript
// Ques 3 - What's the output?
// console.log("start");
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// console.log("middle");
// fn().then((res) => {
//   console.log(res);
// });
// console.log("end");

//start middle 1 end success

// --------------------------------------------------------------------------
// Promises in Javascript
// Ques 4 What's the output?
// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }
// let promise = job();

// promise
//   .then(function () {
//     console.log("Success 1");
//   })
//   .then(() => {
//     console.log("Success 2");
//   })
//   .then(() => {
//     console.log("Success 3");
//   })
//   .catch(() => {
//     console.log("error 1");
//   })
//   .then(() => {
//     console.log("Success 4");
//   });
// error 1 success 4
// ----------------------------------------------------------------------------------
// Ques 5 - What's the output?
// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }
// let promise = job(true);
// promise
//   .then(function (data) {
//     console.log(data);
//     return job(false);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return "Error caught";
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//success error errorcaught

// ---------------------------------------------------------------
//Q 6
// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }
// let promise = job(true);

// promise
//   .then((data) => {
//     console.log(data);
//     return job(true);
//   })
//   .then(function (data) {
//     if (data !== "victory") {
//       throw "Defeat";
//     }
//     return job(true);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return job(false);
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return "Error caught";
//   })
//   .then(function (data) {
//     console.log(data);
//     return new Error("test"); // Not Returning a promise
//   })
//   .then(function (data) {
//     console.log("Success: ", data.message);
//   })
//   .catch(function (error) {
//     console.log("Error", data.message);
//   });

//success, Defeat, error, error caught, success:test

// ----------------------------------------------------------------------------

// Promises in Javascript
// Ques 7 Promise Chaining
// const firstPromise = new Promise((resolve, reject) => {
//   resolve("First!");
// });
// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });
// secondPromise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => console.log(res));
//first

// ------------------------------------------------------------------------------
// Ques 8 - Rewrite this example code using async/await
// instead of .then/catch
// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }
// loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
//   console.log(err)
// );
// async function loadJson(url) {
//   const response = await fetch(url);
//   if (response.status == 200) {
//     const jsonResponse = await response.json();
//     return jsonResponse;
//   }
//   throw new Error(response.status);
// }
// loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
//   console.log(err)
// );

// ---------------------------------------------------------------------------------

// Ques 9 - solve promises recursively

// function promiseRecursive(funcPromises) {
//   //write implwmwtation
//   if (funcPromises?.length === 0) return
//   const currentPromise = funcPromises.shift();

//   currentPromise
//     .then((res) => {
//       console.log(res, "res");
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   promiseRecursive(funcPromises);
// }

// promiseRecursive([
//   importantAction("Roadside Coder"),
//   likeTheVideo("Roadside Coder"),
//   shareTheVideo("Roadside Coder"),
// ]);
// ---------------------------------------------------------------

//Promise Polyfill

// function PromisePolyfill(executor) {
//   let onResolve,
//     onReject,
//     isFullfilled = false,
//     isRejected = false,
//     isCalled = false,
//     value;

//   function resolve(val) {
//     isFullfilled = true;
//     value = val;
//     if (typeof onResolve === "function") {
//       onResolve(value);
//       isCalled = true;
//     }
//   }
//   function reject(val) {
//     isRejected = true;
//     value = val;
//     if (typeof onReject === "function") {
//       onReject(value);
//       isCalled = true;
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
//     if (isRejected && !isCalled) {
//       onReject(value);
//     }
//     return this;
//   };
//   executor(resolve, reject);
// }

// const examplePromise = new PromisePolyfill((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });
// // console.log(examplePromise, "examplepromise");
// examplePromise
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.error(err);
// });

//immediate resolve,reject function
// PromisePolyfill.resolve = (val) => {
//   return new PromisePolyfill(function executor(resolve, reject) {
//     resolve(val);
//   });
// };
// PromisePolyfill.reject = (val) => {
//   return new PromisePolyfill(function executor(resolve, reject) {
//     reject(val);
//   });
// };

// const examplePromise1 =PromisePolyfill.resolve(5)

// examplePromise1.then((res)=>{
//   console.log(res)
// })

// ---------------------------------------------------------------------------------------------------------------------------------------

















