function factorial(n) {
  if (n >= 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

// 5 * (4 * (3 * (2 * 1)));

console.log(factorial(6));
// console.log(5 * (4 * (3 * (2 * 1))));
