const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const result = new Set();

const solve = (lines) => {
  for (let i = 1; i < lines.length; i++) {
    result.add(lines[i]);
  }

  return Array.from(result).join("\n");
};

textFileInput(input, solve);
