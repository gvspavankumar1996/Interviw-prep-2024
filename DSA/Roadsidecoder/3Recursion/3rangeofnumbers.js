// Ques 2: Create an array with range of numbers
// Input: start = 1, end=5 ----->>>>> Output:
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    // console.log(numbers,endNum)
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(0, 5));
