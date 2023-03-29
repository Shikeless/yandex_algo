const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const number = Number(lines[0]);

  const recursion = (n) => {
    if (n <= 1) {
      return 1;
    }
    return recursion(n - 1) + recursion(n - 2);
  };
  return recursion(number);
};

textFileInput(input, solve);
