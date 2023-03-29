const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const result = [];

class StackMax {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(Number(value));
  }

  pop() {
    if (!this.stack.length) return result.push("error");
    this.stack.pop();
  }

  get_max() {
    if (!this.stack.length) return result.push("None");
    result.push(Math.max(...this.stack));
  }
}

const stack = new StackMax();

const controller = (line) => {
  const [method, arg] = line.split(" ");

  stack[method](arg);
};

const solve = (lines) => {
  lines.shift();

  for (let i = 0; i < lines.length; i++) {
    controller(lines[i]);
  }

  return result.join("\n");
};

textFileInput(input, solve);
