function multiply(arr) {
  if (arr.length <= 0) {
    return 1;
  }
  return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
}

console.log(multiply([2, 3, 4, 5]));
// console.log(5 * (4 * (3 * (2 * 1))));
