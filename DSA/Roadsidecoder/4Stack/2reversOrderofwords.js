// Ques 1: Given an input string s, reverse the order of the words
// Input: "the sky is blue" Output: "blue is sky the"
// Input: 11 hello world " Output: "world hello"
// Input: "a good  example"(more space bet. good nd example) >>>>> Output: "example good a"

const reverseWords = (str) => {
  const splitS = str.split(" ");
  let stack = [];
  let revWord = "";
  for (let i of splitS) {
    stack.push(i);
  }
  while (stack?.length) {
    const current = stack.pop();

    if (current) {
      revWord += " " + current;
    }
  }

  console.log(revWord);
};

reverseWords("a good  example");
