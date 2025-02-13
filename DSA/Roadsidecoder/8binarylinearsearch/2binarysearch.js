// Ques 2: Implement Binary Search in JavaScript
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// Write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9  ----->>>>>  Output:  4
// Input: nums = [-1,0,3,5,9,12], target = 2  ----->>>>>  Output: -1

function search(nums, target) {
  let s = 0;
  let e = nums.length - 1;
  while (s < e) {
    let middle = Math.floor((s + e) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[s] < target) {
      e = middle - 1;
    } else {
      s = middle + 1;
    }
  }

  return -1;
}

console.log(search[(-1, 0, 3, 5, 9, 12)], 9);
