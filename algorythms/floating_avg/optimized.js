const { textFileInput } = require("../../textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let arr = lines[0].split(" ");
  avg(
    arr.map((i) => Number(i)),
    3
  );
};

const avg = (arr, k) => {
  const result = [];
  let cur = arr.slice(0, k).reduce((a, c) => c + a, 0);
  result.push(cur / k);
  for (let i = 0; i < arr.length - k; i++) {
    cur = cur - arr[i] + arr[i + k];
    result.push(cur / k);
  }
  console.log(result);
  return result;
};

textFileInput(input, solve);
