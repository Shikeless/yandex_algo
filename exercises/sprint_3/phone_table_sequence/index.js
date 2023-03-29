const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const table = [
  undefined,
  undefined,
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

const result = [];

const solve = (lines) => {
  const seq = lines[0].split("").map((i) => Number(i));

  const recursion = (n, str) => {
    if (n === seq.length) {
      return result.push(str);
    }

    for (let i = 0; i < table[seq[n]].length; i++) {
      recursion(n + 1, str + table[seq[n]].charAt(i));
    }
  };

  recursion(0, "");

  return result.join(" ");
};

textFileInput(input, solve);
