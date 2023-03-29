const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  lines.shift();

  lines = Array.from(new Set(lines));

  lines.sort((a, b) => {
    if (
      Number(a.substring(0, a.indexOf(" "))) >
      Number(b.substring(0, b.indexOf(" ")))
    )
      return 1;
    if (
      Number(a.substring(0, a.indexOf(" "))) <
      Number(b.substring(0, b.indexOf(" ")))
    )
      return -1;
    return 0;
  });

  lines = lines.map((i) => {
    let index = i.indexOf(" ");
    return [Number(i.substring(0, index)), Number(i.substring(index + 1))];
  });

  for (let n = 0; n < lines.length - 1; n++) {
    const cur = lines[n];
    let next = lines[n + 1];

    if (cur[1] >= next[0]) {
      lines[n + 1] = [cur[0], Math.max(cur[1], next[1])];
      lines[n] = null;
    }
  }

  return lines
    .filter((i) => {
      return i;
    })
    .map((i) => i && i.join(" "))
    .join("\n");
};

textFileInput(input, solve);
