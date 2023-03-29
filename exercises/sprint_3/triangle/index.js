const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let arr = lines[1].split(" ").map((i) => Number(i));

  let result = 0;

  arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1] + arr[i + 2]) {
      result = arr[i] + arr[i + 1] + arr[i + 2];
      break;
    }
  }

  return `${result}`;
};

textFileInput(input, solve);
