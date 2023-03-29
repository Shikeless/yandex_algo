const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const open_brackets = ["(", "[", "{"];
const close_brackets = [")", "]", "}"];

class Line {
  constructor() {
    this.line = [];
  }

  add(value) {
    this.line.push(value);
  }

  pop() {
    return this.line.pop();
  }
}

const printResult = (value) => {
  return value ? "True" : "False";
};

const bracketLine = new Line();

const solve = (lines) => {
  let result = true;

  const sequence = lines[0].split("");

  if (sequence.length < 2) return printResult(false);

  for (let i = 0; i < sequence.length; i++) {
    const value = sequence[i];

    if (open_brackets.some((i) => i === value)) {
      bracketLine.add(value);
      continue;
    }

    const index = close_brackets.findIndex((i) => i === value);

    if (bracketLine.pop() !== open_brackets[index]) {
      result = false;
      break;
    }
  }

  return printResult(result);
};

textFileInput(input, solve);
