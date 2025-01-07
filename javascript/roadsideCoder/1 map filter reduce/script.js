// // map polyfill

// const arr = [1, 2, 3, 4];

// // const mapValue=arr.map((item,index)=>{
// //     return item*2
// // })

// // console.log(mapValue)

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i]));
//   }
//   return temp;
// };
// const customMapValue = arr.myMap((item, index) => {
//   return item * 2;
// });

// // console.log(customMapValue)

// // filter polyfill

// const arr2 = [1, 2, 3, 4];

// // const mapValue=arr.map((item,index)=>{
// //     return item*2
// // })

// // console.log(mapValue)

// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };
// const customFilterValue = arr2.myFilter((item, index) => {
//   return item >= 2;
// });

// // console.log(customFilterValue);

// // filter reduce

// const arr3 = [2, 2, 3, 4];

// // const mapValue=arr.map((item,index)=>{
// //     return item*2
// // })

// // console.log(mapValue)

// Array.prototype.myReduce = function (cb, init) {
//   console.log(init);
//   let acc = init;
//   if (acc) {
//     console.log("true");
//   } else {
//     console.log(false);
//   }
//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i]) : this[i];
//   }
//   return acc;
// };
// const customReduceValue = arr3.myReduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(customReduceValue);

// // for (var i = 0; i < 5; i++) {
// //   setTimeout(function () {
// //     console.log(i);
// //   }, i * 1000);
// // }

// -----------------------------------

const arr = [1, 2, 3];

// const multipliedArray = arr.map((val)=>{
//   return val*2
// })

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i));
  }

  return result;
};

const multipliedArray = arr.myMap((val) => {
  return val * 2;
});

// console.log(multipliedArray, "map");

// --------------------------------------

Array.prototype.myFIlter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      result.push(this[i]);
    }
  }

  return result;
};

// const evenNumbers = arr.myFIlter((val) => {
//   return val % 2 === 0;
// });

// console.log(evenNumbers, "filtered values");

// ------------------------------------------
Array.prototype.myReduce = function (cb, initialValue) {
  let init = this[0];
  if (arguments.length > 1) {
    init = initialValue;
  }
  let result = init;
  for (let i = arguments.length > 1 ? 0 : 1; i < this.length; i++) {
    result = cb(result, this[i]);
  }

  return result;
};

const reducedNumber = arr.reduce((acc, curr) => {
  return acc + curr;
},2);

console.log(reducedNumber, arr, "reducedNumber values");
