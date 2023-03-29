const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let x = Number(lines[0]);
  if (x === 0) return `${0}`;
  let result = "";
  while (x !== 0) {
    let r = x % 2;
    result = `${r}` + result;
    x = Math.floor(x / 2);
  }

  console.log(result);
  return result;
};

textFileInput(input, solve);
