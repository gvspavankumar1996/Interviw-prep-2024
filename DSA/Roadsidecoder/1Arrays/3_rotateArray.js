// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non negative.
// Input: nums = [1,2,3,4,5,6,7], k = 3 ---> Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2 ----> Output: [3,99,-1,-100]

// function rotateArrayByK(arr, k) {
//   const size = arr.length;
//   if (k > size) {
//     k = k % size;
//   }

//   const rotated = arr.splice(size - k, k);
//   arr.unshift(...rotated)
//   return arr;
// }

// optimized
function rotateArrayByK(arr, k) {
  const size = arr.length;
  if (k > size) {
    k = k % size;
  }
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
}
function reverse(arr, s, e) {
    while (s < e) {
      console.log(s, e)
    const temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
  }
}

console.log(rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 3));
