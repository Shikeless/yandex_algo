const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let arr = lines[1].split(" ").map((i) => Number(i));

  const iteration = (arr) => {
    let sorting = false;

    for (let i = 0; i < arr.length - 1; i++) {
      let cur = arr[i];
      let next = arr[i + 1];
      if (cur > next) {
        sorting = true;
        arr[i] = next;
        arr[i + 1] = cur;
      }
    }

    if (sorting) {
      iteration(arr);
    }
  };

  iteration(arr);

  return result.length ? result.join("\n") : arr.join(" ");
};

textFileInput(input, solve);
