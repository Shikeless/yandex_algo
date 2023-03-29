const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const result = [];

const solve = (lines) => {
  const numbers = [...Array(Number(lines[0])).keys()];
  const length = Number(lines[1]);

  console.log(numbers);
  console.log(length);

  const recursion = (n, str) => {
    if (n === 0) return result.push(str);
    for (let i = 0; i < numbers.length; i++) {
      recursion(n - 1, str + String(numbers[i]));
    }
  };

  recursion(length, "");
  console.log(result.length);
  console.log(result);
};

textFileInput(input, solve);
