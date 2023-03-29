const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const xs = Number(lines[0]);
  const ys = Number(lines[1]);
  const pages = Number(lines[2]);

  let low = Math.min(xs, ys);
  let high = pages * Math.max(xs, ys);

  while (low + 1 < high) {
    let mid = Math.ceil((high + low) / 2);

    let xw = Math.floor(mid / xs);
    let yw = Math.floor(mid / ys);

    if (xw + yw <= pages) {
      low = mid;
    } else {
      high = mid;
    }
  }

  let result = low < pages ? high : low;
  return result;
};

textFileInput(input, solve);
