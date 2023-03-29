const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let length = Number(lines[0]);
  let arr = lines[1].split(" ").map((i) => Number(i));

  let max = 0;
  let blocks = 0;

  console.log(arr);

  for (let i = 0; i < length; i++) {
    max = Math.max(max, arr[i]);
    if (max > i) continue;
    if (max === i) blocks++;
  }

  return blocks;
};

textFileInput(input, solve);
