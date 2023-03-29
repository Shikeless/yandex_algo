const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

solve = (lines) => {
  const numbers = lines[1].split(" ");

  for (let i = 0; i < numbers.length; i++) {
    let cur = numbers[i];

    let j = i;

    while (j > 0 && cur > numbers[j - 1]) {
      numbers[j] = numbers[j - 1];
      j--;
    }

    numbers[j] = cur;
  }

  return numbers;
};

textFileInput(input, solve);
