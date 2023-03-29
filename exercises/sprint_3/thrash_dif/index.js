const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const length = Number(lines[0]);
  const numbers = lines[1].split(" ").map((i) => Number(i));
  const k = Number(lines[2]);

  numbers.sort((a, b) => a - b);

  function countPairs(arr, mid, k) {
    let left = 0;
    let count = 0;

    for (let i = 0; i < length; i++) {
      while (arr[i] - arr[left] > mid) {
        left++;
      }

      count += i - left;

      if (count >= k) return true;
    }
    return false;
  }

  let low = 0;
  let high = Math.abs(numbers[length - 1] - numbers[0]);

  while (low < high) {
    let middle = Math.floor((low + high) / 2);

    if (countPairs(numbers, middle, k)) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }

  return `${low}`;
};

textFileInput(input, solve);
