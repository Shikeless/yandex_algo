const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const height = Number(lines.shift());
  const width = Number(lines.shift());

  const trans = [...Array(width)].map((x) => []);

  for (let y = 0; y < height; y++) {
    const line = lines[y].split(" ");
    for (let x = 0; x < width; x++) {
      trans[x][y] = line[x];
    }
  }
  return trans.map((i) => i.join(" ")).join("\n");
};

textFileInput(input, solve);
