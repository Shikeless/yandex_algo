const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const height = Number(lines[0]);
  const width = Number(lines[1]);
  const conY = Number(lines[2 + height]);
  const conX = Number(lines[2 + height + 1]);
  const matrix = lines
    .slice(2, 2 + height)
    .map((i) => i.split(" ").map((x) => Number(x)));

  const result = [];

  const extractor = (y, x) => {
    return matrix[y][x];
  };

  const defineNeigbhors = (y, x) => {
    const nY = [y - 1, y + 1];
    const nX = [x - 1, x + 1];

    const result = [];

    for (let i of nY) {
      result.push([i, conX]);
    }

    for (let i of nX) {
      result.push([conY, i]);
    }

    return result.filter((i) => {
      return 0 <= i[0] && i[0] < height && 0 <= i[1] && i[1] < width;
    });
  };

  for (let nYnX of defineNeigbhors(conY, conX)) {
    result.push(extractor(...nYnX));
  }

  return console.log(result.sort((a, b) => a - b).join(" "));
};

textFileInput(input, solve);
