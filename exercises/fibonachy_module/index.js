const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let [number, k] = lines[0].split(" ").map((i) => Number(i));

  k = Math.pow(10, k);

  let stepOne = 0;
  let stepTwo = 1;

  for (let i = 0; i < number; i++) {
    let current = (stepOne + stepTwo) % k;

    stepOne = stepTwo;
    stepTwo = current;
  }

  return `${stepTwo}`;
};

textFileInput(input, solve);
