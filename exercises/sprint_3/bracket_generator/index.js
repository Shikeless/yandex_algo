const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const brackets = ["(", ")"];
const rightSides = [];
const leftSides = [];
const result = [];

const collapseBrackets = (string) => {
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    if (
      string.charAt(i) === brackets[1] &&
      stack[stack.length - 1] === brackets[0]
    ) {
      stack.pop();
      continue;
    }
    stack.push(string.charAt(i));
  }

  return stack;
};

const solve = (lines) => {
  const length = Number(lines[0]);

  const recursion = (n, str) => {
    if (n === 0) {
      let collapsed = collapseBrackets(str);

      if (collapsed.indexOf(brackets[1]) >= 0) return;

      return leftSides.push(str);
    }

    for (let i = 0; i < brackets.length; i++) {
      recursion(n - 1, str + String(brackets[i]));
    }
  };

  const reverseRecursion = (n, str) => {
    if (n === 1) {
      str += brackets[1];

      let collapsed = collapseBrackets(str);

      if (collapsed.indexOf(brackets[0]) >= 0) return;

      return rightSides.push(str);
    }

    for (let i = 0; i < brackets.length; i++) {
      reverseRecursion(n - 1, str + String(brackets[i]));
    }
  };

  recursion(length - 1, brackets[0]);
  reverseRecursion(length, "");

  for (let l = 0; l < leftSides.length; l++) {
    for (let r = 0; r < rightSides.length; r++) {
      let combine = leftSides[l] + rightSides[r];
      if (!collapseBrackets(combine).length) result.push(combine);
    }
  }

  return result.join(`\n`).trim();
};

textFileInput(input, solve);
