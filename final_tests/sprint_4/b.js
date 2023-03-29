// -- ПРИНЦИП РАБОТЫ --
// Для разрешения коллизий взят принцив метода цепочек основаный на связных списках
// https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA
// Вичисление хэша таблицы происходит методом деления методом деления.
// Для определения размера таблицы взято большое простое число.
// Все строки из вводного потока проходят через функцию контроллер, которая разбивает строку на название метода и аргументы.
// Из контролллера обрабатываются следующие методы: put - добавление нового значения, или апдейт существующего, get - получение
// значения из таблицы, если оно существует, delete - удаление значения из таблицы, если оно существует.

// -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
// Функция определения хэша по ключу является чистой (детерминированной): при равных ключах, хэш гарантировано будет равным. Это означает что
// если ключ предварительно был сохранен в таблицу, его поломежение в таблице строго определено значением ключа. Методы put, и delete так-же
// используют функцию определения ячейки, и в них обязательно наличие ключа, значит, ячейка таблицы к которой они обращаются, либо содержит
// необходимое значение, либо в таблице исходного значения не существует.

// -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
// На операцию добавления значения в таблицу требуется константное время O(1).
// Для операции обнавления значения, поиска значения, и удаления значения зависят от коэфицента заполнения таблицы и в среднем
// равны O(1 + коэфицент заполнения таблицы).
// Средняя временная сложность работы с таблицей равна O(1)

// -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
// Пространственная сложность равна заданому размеру хэш таблицы - O(n)

// id успешной попытки - 83507758

const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const hashTableLength = 809;
const noneLog = "None";

const results = [];

const hash = (value) => {
  let res = Number(value) % hashTableLength;

  return Math.abs(res);
};

/**
 * @typedef {Object} TChainLink - объект звено связного списка
 * @property {TChainLink | null} prev - ссылка на предыдущий объект в списке
 * @property {TChainLink | null} next - ссылка на следующий объект в списке
 * @property {string} key - ключ объекта
 * @property {string} value - значение объекта
 **/

class HashTable {
  constructor() {
    /**
     * @property {Array<TChainLink>} table - хэш-таблица. Размер который определеяется внешней переменной
     */
    this.table = Array(hashTableLength);
  }

  /**
   * @method createChainLink - метод конструктор звена связного списка
   * @param {string} key - ключ конкретного элемента элемента связного списка
   * @param {string} value - значение конкретного элемента элемента связного списка
   * @return {TChainLink} - возвращает объект звено связного списка
   */
  createChainLink = (key, value) => {
    return { prev: null, next: null, key, value };
  };

  /**
   * @method put - добавляет новый объект в связный список, или обновляет существующий, если ключи совпадают
   * @param {string} key - ключ нового элемента
   * @param {string} value - значение новго элемента
   * @return {void} - функция проводит манипуляции с таблицей
   */
  put(key, value) {
    let bucketIndex = hash(key);

    let newChainLink = this.createChainLink(key, value);

    let chainLink = this.get(key, true);
    if (chainLink) {
      chainLink.value = value;

      return;
    }

    if (this.table[bucketIndex]) {
      this.table[bucketIndex].prev = newChainLink;
      newChainLink.next = this.table[bucketIndex];
    }

    this.table[bucketIndex] = newChainLink;
  }

  /**
   * @method get - поиск элемента в таблице
   * @param {string} key - ключ элемента
   * @param {boolean} skipLog - булевое значение добавления логов операции в итоговый результат
   * @return {TChainLink | noneLog | undefined} - Функция осуществляет поиск по ключу в ячейке таблицы и возвращает результат поиска.
   */
  get(key, skipLog) {
    let result = undefined;
    let bucketIndex = hash(key);

    let chainLink = this.table[bucketIndex];

    while (chainLink && result === undefined) {
      if (chainLink.key === key) {
        result = chainLink;
        break;
      }

      chainLink = chainLink.next;
    }

    if (!skipLog) {
      results.push(result ? result.value : noneLog);
    }

    return result;
  }

  /**
   * @method delete - удаление элемента из таблицы
   * @param {string} key - ключ элемента
   * @return {void} - Функция осуществляет поиск по ключу в ячейке таблицы, если ключ найден, элемент удаляется.
   * Если ключ не найден, соответствуюший лог добавляется в итоговый резултат
   */
  delete(key) {
    let chainLink = this.get(key, true);

    if (chainLink) {
      results.push(chainLink.value);

      let bucketIndex = hash(key);

      if (chainLink.next) {
        chainLink.next.prev = chainLink.prev;

        this.table[bucketIndex] = chainLink.next;
      }

      if (chainLink.prev) {
        chainLink.prev.next = chainLink.next;

        this.table[bucketIndex] = chainLink.prev;
      }

      if (!chainLink.prev && !chainLink.next) {
        if (key === chainLink.key) this.table[bucketIndex] = undefined;
      }

      return;
    }

    results.push(noneLog);
    return;
  }
}

const hashTable = new HashTable();

const controller = (line) => {
  const [method, ...args] = line.split(" ");

  hashTable[method](...args);
};

const solve = (lines) => {
  for (let i = 1; i < lines.length; i++) {
    controller(lines[i]);
  }

  return results.join("\n");
};

process.stdin.on("end", () => process.stdout.write(solve(_inputLines)));
