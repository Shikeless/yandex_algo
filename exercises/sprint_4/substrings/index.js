const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let string = lines[0];
  let max = 0;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    let index = result.indexOf(char);

    if (index >= 0) {
      result = result.slice(index + 1);
    }

    result += char;

    max = Math.max(result.length, max);
  }

  return max.toString();
};

textFileInput(input, solve);
