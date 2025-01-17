// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.
// Input: [-2,1, −3,4,-1,2,1,-5,4] ----->>>>> Output: 6, [4,-1,2,1]
// Input: [5,4,-1,7,8] ----->>>>> Output: 23, [5,4,-1,7,8]

// function maxSubArray(arr) {
//   let maxSubarrayValue = arr[0];
//   let start = 0;
//   let end = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < arr.length; j++) {
//       currentSum = currentSum + arr[j];
//       if (currentSum > maxSubarrayValue) {
//         maxSubarrayValue = currentSum;
//         start = i;
//         end = j;
//       }
//     }
//   }
//    console.log(arr.slice(start,end+1),maxSubarrayValue)

// }

//optimized
function maxSubArray(arr) {
  let sum = 0;
  let maxSum = arr[0];
  let start = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > maxSum) {
      maxSum = sum;
      end = i;
    }
    if (sum < 0) {
      sum = 0;
      start = i+1;
    }
  }
//   console.log(maxSum);
    console.log(arr.slice(start, end + 1), maxSum);
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
