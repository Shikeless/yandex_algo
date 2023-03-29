// -- ПРИНЦИП РАБОТЫ --
// В соответсвии описанию задачи за основу реализации взят стек чисел.
// https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
// В случае обработки арифметического оператора стек проверяется на наличие двух чисел,
// после чего с ними выполняется соответсвующая операция, а результат добавляется в стэк

// -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
// Для операции с числами из стэка, при их наличии, всегда возвращаются только 2 числа с его вершины,
// что гарантирует то, что, операция будет произведена ожидаемыми значениями

// -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
// Операция с каждым элементом из входного потока осуществляется единожды, сложность алгоритма равна 0(n)

// -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
// максимальное число элементов в памяти не будет превышать размера элементов входного потока
// пространственная сложность алгоритма равна 0(n)

const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(Number(value));
  }

  pop() {
    if (!this.stack.length) return;
    return this.stack.pop();
  }
}

const stack = new Stack();

const useOperator = (string) => {
  let length = stack.stack.length;

  if (
    [stack.stack[length - 1], stack.stack[length - 2]].some(
      (i) => i === undefined
    )
  ) {
    return;
  }

  let a = stack.pop();
  let b = stack.pop();
  let result;

  if (string === "+") {
    result = a + b;
  }
  if (string === "-") {
    result = b - a;
  }
  if (string === "*") {
    result = a * b;
  }
  if (string === "/") {
    result = Math.floor(b / (a || 1));
  }

  stack.push(result);
};

const solve = (lines) => {
  const arr = lines[0].split(" ");

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (!isNaN(item)) {
      stack.push(Number(item));
      continue;
    }

    useOperator(item);
  }

  return `${stack.pop()}`;
};

process.stdin.on("end", () => process.stdout.write(solve(_inputLines)));
