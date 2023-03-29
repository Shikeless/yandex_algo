const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const num = 16;

const solve = (lines) => {
  let arr = lines[0].split(" ").map((i) => Number(i));

  cashedTwoSum(arr, num);
};

const cashedTwoSum = (arr, num) => {
  let set = new Set();

  let result;

  for (let i = 0; i < arr.length; i++) {
    const cashed = num - arr[i];

    if (set.has(cashed)) {
      result = [cashed, arr[i]];
      break;
    }

    if (!set.has(cashed)) {
      set.add(arr[i]);
    }
  }

  return result;
};

textFileInput(input, solve);
