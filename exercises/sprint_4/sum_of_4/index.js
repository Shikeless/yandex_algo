const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let length = Number(lines[0]);
  let num = Number(lines[1]);
  let numbers = lines[2].split(" ").map((i) => Number(i));

  let history = new Map();
  let result = new Set();

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      let sum = numbers[i] + numbers[j];

      if (!history.get(sum)) history.set(sum, new Set());

      history.get(sum).add([i, j]);
    }
  }

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      let sum = numbers[i] + numbers[j];
      let target = num - sum;

      if (history.get(target)) {
        history.get(target).forEach((t) => {
          if (t[0] !== i && t[0] !== j && t[1] !== i && t[1] !== j) {
            result.add(
              [numbers[t[0]], numbers[t[1]], numbers[i], numbers[j]]
                .sort((a, b) => a - b)
                .join(" ")
            );
          }
        });
      }
    }
  }

  return Array.from(result)
    .sort((a, b) => {
      let as = a.split(" ").map((i) => Number(i));
      let bs = b.split(" ").map((i) => Number(i));
      if (as[0] > bs[0]) return 1;
      if (as[0] < bs[0]) return -1;
      if (as[1] > bs[1]) return 1;
      if (as[1] < bs[1]) return -1;
      if (as[2] > bs[2]) return 1;
      if (as[2] < bs[2]) return -1;
      if (as[3] > bs[3]) return 1;
      if (as[3] < bs[3]) return -1;
      return 0;
    })
    .join("\n");
};

textFileInput(input, solve);
