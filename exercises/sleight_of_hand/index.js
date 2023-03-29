const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let k = Number(lines[0]);
  let points = 0;
  let numbers = lines
    .slice(1, lines.length)
    .join("")
    .split("")
    .map((i) => Number(i))
    .filter((i) => !isNaN(i));

  console.log(numbers);

  const counters = Array(10);

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    counters[number] ? counters[number]++ : (counters[number] = 1);
  }

  for (let i = 1; i <= 9; i++) {
    if (!counters[i]) continue;
    if (k * 2 >= counters[i]) {
      points++;
    }
  }

  console.log(points);

  return `${points}`;
};

textFileInput(input, solve);
