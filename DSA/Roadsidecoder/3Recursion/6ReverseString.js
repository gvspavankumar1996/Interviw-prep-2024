// Ques 5 Reverse a String
// Input: "hello" Output: "olleh"
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));
