const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const result = [];

class StackMax {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(value) {
    this.stack.push(Number(value));
    this.check_max(Number(value));
  }

  check_max(value) {
    if (!this.maxStack.length) return this.maxStack.push(value);
    this.maxStack.push(
      Math.max(this.maxStack[this.maxStack.length - 1], value)
    );
  }

  pop() {
    if (!this.stack.length) return result.push("error");

    this.stack.pop();
    this.maxStack.pop();
  }

  get_max() {
    if (!this.maxStack.length) return result.push("None");

    result.push(this.maxStack[this.maxStack.length - 1]);
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
