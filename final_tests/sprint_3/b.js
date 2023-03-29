// -- ПРИНЦИП РАБОТЫ --
// Решение основано на классическом quicksort алгоритме.
// https://en.wikipedia.org/wiki/Quicksort#:~:text=Quicksort%20is%20a%20divide%2Dand,sometimes%20called%20partition%2Dexchange%20sort.
// Разница заключается в том, что нам необходимо менять положения элементов не используя дополнительной памяти,
// и не используя промежуточных массиов. Такой принцип в программировании называется in-place.
// https://en.wikipedia.org/wiki/In-place_algorithm.
// На каждой итерации рекурсии мы определяем pivot элемент, относительно которого будем осуществлять
// сравнение остальных элементов. Наша задача сделать так, чтобы в конечном счете отрезок массива с которым
// мы работает был отсортирован следующим образом: в одной половине все элементы ниже pivot, в другой половине
// все элементы больше pivot. Элементам в этих половинах не обязательно был отсортированными между собой.
// Далее мы повторяем цикл для обеих половин, продолжая циклы рекурсии пока размеры сортируемых массивов не достигнут длинны
// равной 1. В итоге мы получим полность остортированный массив

// -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
// В ходе перебора мы используем указатель индекса элемента, по которому происходит разделение двух половин исходного массива
// По окончанию итерации, не обязательно, что индекс будет указывать строго на середину исходного массива, положение индекса
// зависит от значений элементов. Но, если логика нигде не нарушена, после разделения будет выполнено следующее условие:
// самый большой элемент одной половины будет меньше самого маленького элемента другой. Этого, при условии что каждая половина,
// в свою очередь будет так же поделена, и отсортирована, будет достаточно для получения полностью отстортированного массива.

// -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
// Каждый цикл рекурсивной сортировки происходит с поделенным на две половины массивом из предыдущего цикла.
// Средняя временная сложность алгоритма равна O(n log n)

// -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
// По условию задачи запрещено пользоваться дополнительными массивами для хранения разделенных половин, все опрерации перестановки
// происходят с исходным массиовм. Пространнственная сложность будет равная O(n)

// id успешной попытки - 82870571

const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

class Member {
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

let solve = (lines) => {
  let arr = [];

  for (let i = 1; i < lines.length; i++) {
    arr.push(new Member(...lines[i].split(" ")));
  }

  if (isNaN(arr[arr.length - 1].solved)) arr.pop();

  const partition = (a, left, right, pivotNumber) => {
    while (left < right) {
      let lVal = a[left];

      if (a[left].solved > pivotNumber) {
        left++;
        continue;
      }

      if (a[right].solved < pivotNumber) {
        right--;
        continue;
      }

      if (a[left].solved === a[right].solved) {
        if (a[left].penalty > a[right].penalty) {
          a[left] = a[right];
          a[right] = lVal;
          continue;
        }

        if (a[left].penalty === a[right].penalty) {
          if (a[left].name > a[right].name) {
            a[left] = a[right];
            a[right] = lVal;
            continue;
          }
        }
        right--;
        continue;
      }

      a[left] = a[right];
      a[right] = lVal;
    }

    return left;
  };
  function quickSort(a, start, end) {
    if (start >= end) return;

    let pivot = Math.floor((start + end) / 2);
    let pivotNumber = a[pivot].solved;

    let left = start;
    let right = end;

    left = partition(a, left, right, pivotNumber);

    quickSort(a, start, left);
    quickSort(a, left + 1, end);
  }

  quickSort(arr, 0, arr.length - 1);

  return arr.map((i) => i.name).join("\n");
};

process.stdin.on("end", () => process.stdout.write(solve(_inputLines)));
