const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const result = [];

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }

  createNode(value) {
    return {
      value: value,
      prev: null,
      next: null,
    };
  }

  put(value) {
    const newNode = this.createNode(value);

    if (this.length === 0) {
      this.head = newNode;
      this.last = newNode;
    }

    if (this.length > 0) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  get() {
    if (this.length === 0) {
      return result.push("error");
    }

    if (this.length === 1) {
      result.push(this.last.value);
      this.last = null;
      this.head = null;
    }

    if (this.length > 1) {
      result.push(this.last.value);
      this.last = this.last.prev;
      this.last.next = null;
    }

    this.length--;
  }

  size() {
    return result.push(this.length);
  }
}

const queue = new LinkedListQueue();

const controller = (line) => {
  const [method, arg] = line.split(" ");

  queue[method](arg);
};

const solve = (lines) => {
  lines.shift();

  for (let i = 0; i < lines.length; i++) {
    controller(lines[i]);
  }
  console.log(result.join("\n"));
  return result.join("\n");
};

textFileInput(input, solve);
