const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const number = BigInt(lines[1].replace(/ +/g, ""));
  const k = BigInt(lines[2]);

  return (number + k).toString().replace("n", "").split("").join(" ");
};

textFileInput(input, solve);
