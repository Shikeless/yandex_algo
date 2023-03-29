const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const num = 16;

const solve = (lines) => {
  let arr = lines[0].split(" ").map((i) => Number(i));

  arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  sortedTwoSum(arr, num);
};

const sortedTwoSum = (arr, num) => {
  let result;

  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex < endIndex && !result) {
    const sum = arr[startIndex] + arr[endIndex];

    if (sum > num) endIndex--;
    if (sum < num) startIndex++;
    if (sum === num) result = [arr[startIndex], arr[endIndex]];
  }

  return result;
};

textFileInput(input, solve);
