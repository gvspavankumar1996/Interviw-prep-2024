// Ques 4: Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right. You can only see the k numbers
// in the window. Each time the sliding window moves right by one position.
// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

const maxSlidingWindowQueue = (nums, k) => {
  let result = [];
  let dequeue = [];

  for (let i = 0; i < nums.length; i++) {
    if (dequeue.length > 0 && dequeue[0] <= i - k) {
      dequeue.shift();
    }

    while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
      dequeue.pop();
    }
    dequeue.push(i);
    if (i >= k - 1) {
      result.push(nums[dequeue[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindowQueue([1, 3, -1, -3, 5, 3, 6, 7], 3));
