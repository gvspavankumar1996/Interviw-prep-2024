// Ques 3: Kth Missing Positive Number
// Given an array arr of positive integers sorted in a strictly increasing order,
// and an integer k. Return the kth positive integer that is missing from this array.
// Input: arr = [2,3,4,7,11], k = 5 ----->> Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...].
// The 5th missing positive integer is 9.

function findKthPositive(arr, k) {
  // let count = 0;
  let low = 0;
  let high=arr.length-1;
  
  while(low<=high){
    let middle  = Math.floor((low+high)/2)
  // console.log(middle)
    const missing = arr[middle]-(middle+1)
    if(missing<k){
      low = middle+1
    }
    else{
      high = middle-1
    }
    
    // return 
    
  }
  return low+k
  // console.log(high,low)
}
console.log(findKthPositive([2,4,5,7], 3));

// console.log(Math.floor((3+4)/2))