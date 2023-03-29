const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const result = [];

class LimitedList {
  constructor(maxSize) {
    this.list = [...Array(maxSize).map((i) => (i = undefined))];
    this.elements = 0;
    this.maxSize = maxSize;
    this.head = 0;
    this.tail = 0;
  }

  findModuleOfMaxSize(value) {
    return value % this.maxSize;
  }

  push(value) {
    if (this.isFull()) {
      return result.push("error");
    }

    this.list[this.tail] = value;
    this.elements++;
    this.tail = this.findModuleOfMaxSize(this.tail + 1);
  }

  pop() {
    if (this.isEmpty()) {
      return result.push("None");
    }

    result.push(this.list[this.head]);
    this.list[this.head] = undefined;
    this.elements--;

    this.head = this.findModuleOfMaxSize(this.head + 1);
  }

  peek() {
    if (this.isEmpty()) return result.push("None");

    return result.push(this.list[this.head]);
  }

  size() {
    return result.push(this.elements);
  }

  isFull() {
    return this.elements === this.maxSize;
  }

  isEmpty() {
    return this.elements === 0;
  }
}

const solve = (lines) => {
  lines.shift();
  const maxSize = Number(lines.shift());

  const list = new LimitedList(maxSize);

  //   console.log(list);

  const controller = (line) => {
    const [method, arg] = line.split(" ");

    list[method](arg);
  };

  for (let i = 0; i < lines.length; i++) {
    controller(lines[i]);
  }

  return result.join("\n");
};

textFileInput(input, solve);
