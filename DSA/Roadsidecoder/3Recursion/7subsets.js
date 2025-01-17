// Ques 6 - Subsets (Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// Input: [1,2,3] Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0] Output: [[],[0]]

function subsets(arr) {
  let result = [];
  let temp = [];
  let currentSumArray = [];

  function recursiveSubset(arr, index, currentSum) {
    if (index === arr.length) {
      result.push([...temp]);
      currentSumArray.push(currentSum);
      return;
    }
    temp.push(arr[index]);
    recursiveSubset(arr, index + 1, currentSum + arr[index]);
    temp.pop();
    recursiveSubset(arr, index + 1, currentSum);
  }
  recursiveSubset(arr, 0, 0);

  return { result, currentSumArray };
}

console.log(subsets([1, 2, 3]));
