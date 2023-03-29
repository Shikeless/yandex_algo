const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const number = Number(lines[0]);

  let stepOne = 1;
  let stepTwo = 1;

  for (let i = 2; i <= number; i++) {
    let current = stepOne + stepTwo;
    stepOne = stepTwo;
    stepTwo = current;
  }

  return `${stepTwo}`;
};

textFileInput(input, solve);
