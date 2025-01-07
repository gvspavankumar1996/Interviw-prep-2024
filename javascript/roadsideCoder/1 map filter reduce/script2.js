//map polyfill

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = cb(this[i]);
  }

  return result;
};

const arr = [1, 2, 3, 4];
const multipliedBy2 = arr.myMap((num, _) => {
  return num * 2;
});
// const multipliedBy2 = arr.map((num, _) => {
//   return num * 2;
// });
// console.log(multipliedBy2, "multipliedBy2");

// --------------------------------------------------------------------------

// filter polyfill

Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};

const arr1 = [1, 2, 3, 4, 6, 7, 3, 9, 10];
const evenNumbers = arr1.myFilter((num, _) => {
  return num % 2 === 0;
});
// const evenNumbers = arr1.filter((num, _) => {
//   return num % 2 === 0;
// });

// console.log(evenNumbers);

// ------------------------------------------------------------------------------------------

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = arguments?.length > 0 ? initialValue : this[0];
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }

  return acc;
};

const arr2 = [1, 2, 3];
const sumOfNumbers = arr2.myReduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}, 0);
// const sumOfNumbers = arr1.reduce((acc, curr) => {
//     console.log(acc,curr)
//   return acc + curr;
// }, 0);

console.log(sumOfNumbers, "sum");
