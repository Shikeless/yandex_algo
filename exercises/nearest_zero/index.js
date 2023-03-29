const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let arr = lines[0].split(" ").map((i) => Number(i));
  let prevZeroIndex;

  const fillSubarray = (start, finish) => {
    if (!start && finish < 1) return;
    if (!finish && start >= arr.length - 1) return;
    if (finish - start < 1) return;

    for (let i = start + 1 || 0; i < (finish || arr.length); i++) {
      arr[i] = Math.min(i - start || Infinity, finish - i || Infinity);
    }
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      fillSubarray(prevZeroIndex, i);
      prevZeroIndex = i;
    }
  }
  fillSubarray(prevZeroIndex);

  return arr.join(" ");
};

textFileInput(input, solve);
