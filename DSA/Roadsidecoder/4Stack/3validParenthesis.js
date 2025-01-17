// Ques 2: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Input: "()" ->>>>> Output: true
// Input: "()[]{}" --- ->>>>> Output: true
// Input: "(]" ----->>>>> Output: false

function isValidParenthesis(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      if (!stack.length) {
        return false;
      }
      const top = stack.pop();
      if (
        char === "}" &&
        top !== "{" &&
        char === ")" &&
        top !== "(" &&
        char === "]" &&
        top !== "["
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidParenthesis("([])[{}]{[]}}"));
