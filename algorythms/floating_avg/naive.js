const { textFileInput } = require("../../textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let arr = lines[0].split(" ");
  avg(arr, 3);
};

const avg = (arr, k) => {
  const result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = arr.slice(i, i + k).reduce((a, c) => Number(c) + a, 0);
    result.push(sum / k);
  }
  return result;
};

textFileInput(input, solve);
