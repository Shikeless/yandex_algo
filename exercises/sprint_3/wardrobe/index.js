const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let length = Number(lines[0]);
  if (!length) return "";
  let arr = lines[1].split(" ").map((i) => Number(i));

  let counters = Array(3).fill(0);

  for (let i = 0; i < arr.length; i++) {
    counters[arr[i]]++;
  }

  return [
    ...Array(counters[0]).fill(0),
    ...Array(counters[1]).fill(1),
    ...Array(counters[2]).fill(2),
  ].join(" ");
};

textFileInput(input, solve);
