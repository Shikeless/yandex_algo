// -- ПРИНЦИП РАБОТЫ --
// За основу решения взят пример кольцевого буфера из урока номер 9
// https://practicum.yandex.ru/learn/algorithms/courses/7f101a83-9539-4599-b6e8-8645c3f31fad/sprints/102207/topics/3fe165ac-9a25-44db-b5bf-106709d1c140/lessons/b5036361-6d27-45be-ac0a-3946d9a0fcde/
// https://en.wikipedia.org/wiki/Circular_buffer
// Для простоты контроля переполнености очереди был добавлен каунтер элементов
// который инкрементируется и декрементируется в зависимости от операции с буфером

// -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
// По скольку мы обновляем головной и хвостовой индекс буфера после каждой операции
// наши дальнейшие операции всегда происходят с корректным индексом
// дополнительная логика проверки переполнености массива не требуется, потому-что данные
// об этом мы храним в отдельной переменной

// Если на момент извлечения из очереди выходной стек пуст,
// то последовательно перекладываю все элементы из входного стека в выходной,
// соответственно они перекладываются в обратном порядке.

// -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
// По сколько мы работаем с конкретным индекаси массива во всех операциях, все операции выполняются за
// константное время, остается только обработать все строки входного потока. Итоговая сложность алгоритми
// будет равна O(n)

// -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
// максимальное число элементов равно maxSize буфера, остальные значения являются примитивами
// пространственная сложность алгоритма равна 0(n)

const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const result = [];
const errorMessage = "error";
const methodsDictionary = {
  push_back: "pushBack",
  push_front: "pushFront",
  pop_back: "popBack",
  pop_front: "popFront",
};

class LimitedList {
  /**
   * @constructor
   * @param {number} maxSize - Числовое значение используемое для определения максимальной длинны листа
   */
  constructor(maxSize) {
    /**
     * @property {Array<number>} list - массив чисел, длинна которого определяется maxSize параметром
     * @property {number} elements - счетчик элементов в массиве
     * @property {number} maxSize - числовое значение максимального размера массива
     * @property {number} head - индекс первого элемента кольцевого буфера
     * @property {number} tail - индекс последнего элемента кольцевого буфера
     */
    this.list = [...Array(maxSize).map((i) => (i = undefined))];
    this.elements = 0;
    this.maxSize = maxSize;
    this.head = 0;
    this.tail = 1;
  }

  /**
   * @method pushBack - добавление элемента в конец кольцевого буфера.
   * @param {number} value - числовое значение которое будет добавлено в буфер
   * @return {void} - Усли буфер переполнен, добавляет в результат строку ошибки,
   * в противном случае после добавление увеличивает на 1 каунтер элементов и индекс последнего элемента буфера
   */
  pushBack(value) {
    if (this.isFull()) {
      return result.push(errorMessage);
    }

    this.list[this.tail] = value;
    this.elements++;
    this.tail = this.findModuleOfMaxSize(this.tail + 1);
  }

  /**
   * @method pushFront - добавление элемента в начало кольцевого буфера.
   * @param {number} value - числовое значение которое будет добавлено в буфер
   * @return {void} - Усли буфер переполнен, добавляет в результат строку ошибки,
   * в противном случае после добавление увеличивает на 1 каунтер элементов, и уменьшает на 1 индекс первого элемента буфера
   */
  pushFront(value) {
    if (this.isFull()) {
      return result.push(errorMessage);
    }

    this.list[this.head] = value;
    this.elements++;
    this.head = this.findModuleOfMaxSize(this.head - 1);
  }

  /**
   * @method popBack - удаление элемента с конца буфера.
   * @return {void} - Усли буфер пуст, добавляет в результат строку ошибки,
   * в противном случае после удаления уменьшает на 1 каунтер элементов, и уменьшает на 1 индекс последнего элемента буфера
   */
  popBack() {
    if (this.isEmpty()) {
      return result.push(errorMessage);
    }
    this.tail = this.findModuleOfMaxSize(this.tail - 1);

    result.push(this.list[this.tail]);
    this.list[this.tail] = undefined;
    this.elements--;
  }

  /**
   * @method popFront - удаление элемента с начала буфера.
   * @return {void} - Усли буфер пуст, добавляет в результат строку ошибки,
   * в противном случае после удаления уменьшает на 1 каунтер элементов, и увеличивает на 1 индекс первого элемента буфера
   */
  popFront() {
    if (this.isEmpty()) {
      return result.push(errorMessage);
    }
    this.head = this.findModuleOfMaxSize(this.head + 1);

    result.push(this.list[this.head]);
    this.list[this.head] = undefined;
    this.elements--;
  }

  /**
   * @method findModuleOfMaxSize - калькуляция нового индекса элементов.
   * @param {number} value - новое значение индекса после операций с буфером
   * @return {number} - Если мы переходим через 0, возвращает максимально возвожный индекс в массиве, равный maxSize - 1
   * во всех других случаях возвращает остаток от деление нового индекс на maxSize
   */
  findModuleOfMaxSize(value) {
    if (value < 0) return Number(this.maxSize - 1);

    return value % this.maxSize;
  }

  /**
   * @method isFull - проверка переполненности буфера.
   * @return {boolean} - Если elements равно maxSize, буфер полом
   */
  isFull() {
    return this.elements === this.maxSize;
  }

  /**
   * @method isFull - проверка пустоты буфера.
   * @return {boolean} - Если elements равено 0, буфер пуст
   */
  isEmpty() {
    return this.elements === 0;
  }
}

const solve = (lines) => {
  lines.shift();
  const maxSize = Number(lines.shift());
  const list = new LimitedList(maxSize);

  const controller = (line) => {
    const [method, arg] = line.split(" ");

    list[methodsDictionary[method]](arg);
  };

  for (let i = 0; i < lines.length; i++) {
    controller(lines[i]);
  }

  return result.join("\n");
};

process.stdin.on("end", () => process.stdout.write(solve(_inputLines)));
