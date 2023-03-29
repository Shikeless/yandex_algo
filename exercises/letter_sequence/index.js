const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const s = lines[0];
  const t = lines[1];
  let c = 0;

  for (let i = 0; i < t.length; i++) {
    if (c === s.length) {
      break;
    }

    if (t.charAt(i) === s.charAt(c)) {
      c++;
      continue;
    }

    if (t.charAt(i) !== s.charAt(c)) {
      continue;
    }
  }

  return c < s.length ? "False" : "True";
};

textFileInput(input, solve);
