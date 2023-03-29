const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const a = Number(lines[0]);
  const m = Number(lines[1]);
  const string = lines[2];

  if (!string.length) return `0`;

  let totalHash = string.charCodeAt(0);

  for (let c = 1; c < string.length; c++) {
    totalHash *= a;
    totalHash += string.charCodeAt(c);
    totalHash = totalHash % m;
  }

  return `${totalHash}`;
};

textFileInput(input, solve);
