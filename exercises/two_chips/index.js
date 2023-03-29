const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const arr = lines[1].split(" ").map((i) => Number(i));
  const num = Number(lines[2]);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Number(arr[i]) + Number(arr[j]) === num)
        result.push([arr[i], arr[j]]);
    }
  }
};

textFileInput(input, solve);
