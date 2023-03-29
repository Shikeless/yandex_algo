const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const results = {};

const solve = (lines) => {
  const bars = lines[0].split("").map((i) => Number(i));

  for (let i = 0; i < bars.length; i++) {
    let height = bars[i];
    let leftEdge = i;
    let rightEdge = i;

    while (leftEdge > 0 && bars[leftEdge - 1] >= height) {
      leftEdge--;
    }

    while (rightEdge < bars.length && bars[rightEdge + 1] >= height) {
      rightEdge++;
    }
    console.log(rightEdge - leftEdge);
    results[i] = {
      height,
      length: rightEdge - leftEdge + 1,
      area: height * (rightEdge - leftEdge + 1),
    };
  }

  console.log(results);
};

textFileInput(input, solve);
