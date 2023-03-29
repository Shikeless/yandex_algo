// -- ПРИНЦИП РАБОТЫ --
// Основа логики решения построена на описании из урока
// https://practicum.yandex.ru/learn/algorithms/courses/7f101a83-9539-4599-b6e8-8645c3f31fad/sprints/102211/topics/e7dbf42a-fd5a-434b-990d-9cfe0e3a10c8/lessons/c29642e4-76ff-47df-82d2-87848ddc7f77/
// Из данных входного потока собирается невозрастающая пирамида. Каждый последующий добавляемый элемент просеивается вверх.
// После сбора пирамиды начинается процесс сбора отсортированных данных: из пирамиды забирается элемент под инексом 1 -
// вершина пирамиды и добавляется в массив результата. После этого вершина пирамиды заменяется на последний элемент в пирамиде,
// который просивается вниз, и длинна пирамиды сокращается на 1. Цикл повторяется пока вct элементы пирамиды не переместятся в массив результата.

// -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
// Допустим, что после формирования мы получаем корректную невозрастающую пирамиду, так мы просеиваем вверх каждый добавляемый в пирамиду элемента.
// Значит в вершине пирамиды мы имеем самый приоритетный по условиям сравнения элемент. После добавления этого элемента в массив результата, новый элемент
// элемент вершины проходит просеивание вниз, таким образом на вершине вновь оказывается самый приоритетный из оставшихся в пирамиде элементов.
// Повторяя данную процедуру мы сформируем массив отсортированных по убываю элементов.

// -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
// Помимо константных операций создания массивов, и замены элементов при проссеивании, нам в худшем случае потребуется O(n * log n) операций на формирование пирамиды,
// и O(n * log n) операций на извлечение из пирамиды и проссеивание элементов вниз. Сумарная сложность алгоритма будет равна O(n * log n)

// -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
// Нам необходимо выделить память для массива элементов пирамиды, и для массива результата, сумарная пространственная сложность будет равна O(n)

// id успешной попытки - 84614038

const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

let heap = [null];
let result = [];

/** Class конструктор участника соревнований */
class Participant {
  constructor(name, solved, penalty) {
    /**
     * @property {string} name - имя участника
     * @property {number} solved - количество решенных задач
     * @property {number} penalty - штрафные очки
     */
    this.name = name;
    this.solved = Number(solved);
    this.penalty = Number(penalty);
  }
}

const comparator = (firstP, secondP) => {
  if (firstP.solved > secondP.solved) return true;
  if (firstP.solved < secondP.solved) return false;
  if (firstP.penalty < secondP.penalty) return true;
  if (firstP.penalty > secondP.penalty) return false;
  if (firstP.name < secondP.name) return true;
  return false;
};

function siftUp(idx) {
  const recursion = (idx) => {
    let parentIndex = Math.floor(idx / 2);

    if (parentIndex < 1) return;
    if (comparator(heap[parentIndex], heap[idx])) return;

    let maxValue = heap[idx];
    heap[idx] = heap[parentIndex];
    heap[parentIndex] = maxValue;

    return recursion(parentIndex);
  };

  let result = recursion(idx);

  return result;
}

function siftDown() {
  const recursion = (idx) => {
    let leftIndex = idx * 2;
    let rightIndex = idx * 2 + 1;
    let maxIndex = leftIndex;

    if (leftIndex >= heap.length) {
      return;
    }

    if (rightIndex < heap.length) {
      maxIndex = comparator(heap[leftIndex], heap[rightIndex])
        ? leftIndex
        : rightIndex;
    }

    if (comparator(heap[maxIndex], heap[idx])) {
      const maxValue = heap[maxIndex];
      heap[maxIndex] = heap[idx];
      heap[idx] = maxValue;
      return recursion(maxIndex);
    }

    return;
  };

  let result = recursion(1);

  return result;
}

const fillHeap = (lines, length) => {
  for (let i = 1; i <= length; i++) {
    let participant = new Participant(...lines[i].split(" "));

    heap.push(participant);

    siftUp(i);
  }
};

const heapsort = () => {
  while (heap.length > 1) {
    result.push(heap[1]);

    heap[1] = heap[heap.length - 1];

    siftDown();

    heap.pop();
  }
};

const solve = (lines) => {
  let length = Number(lines[0]);

  fillHeap(lines, length);
  heapsort();

  return result.map((i) => i.name).join("\n");
};

process.stdin.on("end", () => process.stdout.write(solve(_inputLines)));
