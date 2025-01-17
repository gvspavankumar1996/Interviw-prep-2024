// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.
// Input: [12, 35, 1, 10, 34, 1] ----->>>>> Output: 34
// Input: [10, 5, 10] ---- >> Output: 5

// const findSecondLargest = (arr) => {
//   const uniqueElements = Array.from(new Set(arr));
//   const sortedArr = uniqueElements.sort((a, b) => b - a);
//   if (sortedArr.length >= 2) {
//     return sortedArr[1];
//   } else {
//     return -1;
//   }
// };

//optimized approach
const findSecondLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(findSecondLargest([10]));
