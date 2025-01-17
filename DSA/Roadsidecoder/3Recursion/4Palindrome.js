// Ques 1 Palindrome Number
// An integer is a palindrome when it reads the same forward and backward
// Input: x = 121 ----->>>>> Output: true
// Input: x = 10 ----->>>>> Output: false

//inbuild methods
// function palindrome(x) {
//   return x === +x.toString().split("").reverse().join("");
// }
function palindrome(x) {
  return x === +x.toString().split("").reverse().join("");
}

console.log(palindrome(121121));
