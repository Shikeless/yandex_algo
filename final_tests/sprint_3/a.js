// -- ПРИНЦИП РАБОТЫ --
// За основу решения взят классический бинарный поиск.
// https://ru.wikipedia.org/wiki/%D0%94%D0%B2%D0%BE%D0%B8%D1%87%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D0%B8%D1%81%D0%BA
// Отличие состоит в том,
// как мы определяем половину массива в которой продолжим поиск.
// Ввиду того что мы не может восстановить порядок элементов в массиве заранее.
// После каждого определения mid элемента нам надо определить следующее, если половина
// в которой мы собираемся продолжать поиск отсортирована и для нее соблюдены условия:
// а[0] <= element && element <= a[a.length - 1], мы продоложаем искать элемент в этой половине,
// в противном случае переходим к противоположной половине
//
// Для того чтобы избавиться от лишних проверок, были добавлены две функции поиска элемента
// одна для классического отсортированного отрезка, вторая, с дополнительными условиями, для массива
// со смещенной последовательностью.

// -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
// По сколько по условию задачи последовательность в исходном массиве смещена только в одном месте
// после выбора mid элемента, мы гарантированно получаем отсортированный массив с одной стороны
// и разорванный с другой (если mid элемент не расположен на индексе по которому происходит разрыв).
// Таким образом, используя дополнительные условия описанные выше, мы можем безошибочно определить в какой
// из половин продолжить поиск

// -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
// не смотря на дополнительные условия, мы продолжаем, как и в бинарном поиске с отсортированными данными,
// на каждой иттерации сужать область поиска в 2 раза. Временная сложность алгоритма будет O(log n)

// -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
// мы не храним никаких промежуточным данных, кроме примитивов, пространнственная сложность будет равная O(n)

// id успешной попытки - 82869898

function brokenSearch(arr, num) {
  let result = -1;

  function findMid(start, end) {
    return Math.floor((start + end) / 2);
  }

  function findNumStable(start, end) {
    if (start + 1 > end) {
      if (arr[start] === num) {
        result = start;
      }
      return;
    }

    let mid = findMid(start, end);

    if (arr[mid] === num) return (result = mid);

    let newStart = arr[mid] > num ? start : mid + 1;
    let newEnd = arr[mid] > num ? mid : end;

    findNumStable(newStart, newEnd);
  }

  function findNumUnstable(start, end) {
    if (start + 1 > end) {
      if (Number(arr[start]) === num) {
        result = start;
      }
      return;
    }

    let mid = findMid(start, end);

    if (arr[mid] === num) return (result = mid);

    let leftIsSorted = arr[start] <= arr[mid];
    let rightIsSorted = arr[mid + 1] <= arr[end];
    let isLower = arr[mid] > num;

    if (isLower) {
      if (leftIsSorted) {
        if (arr[start] <= num && num <= arr[mid]) {
          return findNumStable(start, mid);
        }
        return findNumUnstable(mid + 1, end);
      }
      if (!leftIsSorted) {
        return findNumUnstable(start, mid);
      }
    }

    if (!isLower) {
      if (rightIsSorted) {
        if (arr[mid + 1] <= num && num <= arr[end]) {
          findNumStable(mid + 1, end);
        }
        findNumUnstable(start, mid);
      }
      if (!rightIsSorted) {
        findNumUnstable(mid + 1, end);
      }
    }
  }

  findNumUnstable(0, arr.length - 1);

  return `${result}`;
}
