const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const num = 5;

const solve = (lines) => {
  let arr = lines[0].split(" ").map((i) => Number(i));
  twoSum(arr, num);
};

const twoSum = (arr, num) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) result.push([arr[i], arr[j]]);
    }
  }

  return result;
};

textFileInput(input, solve);
