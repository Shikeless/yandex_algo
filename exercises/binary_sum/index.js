const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const steps = Math.max(...lines.map((i) => i.length));

  const data = lines.map((i) =>
    i
      .split("")
      .reverse()
      .map((i) => Number(i))
  );

  let res = "";
  let rest;

  const binarySumOperation = (x, y) => {
    let result;

    if (x === undefined) x = 0;
    if (y === undefined) y = 0;

    let subsum = x + y;

    if (rest) {
      subsum += rest;
      rest = undefined;
    }

    if (subsum === 0) result = 0;
    if (subsum === 1) result = 1;
    if (subsum === 2) {
      result = 0;
      rest = 1;
    }
    if (subsum === 3) {
      result = 1;
      rest = 1;
    }
    return result;
  };

  for (let i = 0; i < steps; i++) {
    res = binarySumOperation(data[0][i], data[1][i]) + res;
  }

  res = rest ? rest + res : res;

  console.log(res);
};

textFileInput(input, solve);
