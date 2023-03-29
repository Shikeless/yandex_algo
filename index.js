class StackMax {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(Number(value));
  }

  pop() {
    if (!this.stack.length) console.log("error");
    this.stack.pop();
  }

  get_max() {
    if (!this.stack.length) console.log("None");
    console.log(Math.max(...this.stack));
  }
}
