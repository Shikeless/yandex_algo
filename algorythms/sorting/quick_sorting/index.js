// время работы этого алгоритма в худшем случае равна O(n^2),
// например для остортированного массива, если  для опорного элемента
// всегда выбирать первый или последний элемент массива
// Среднаяя же сложность O(n log n), для этого достаточно кадлый раз
// выбирать случайный элемент, или элемент из центра массива

const length = 1000;

const arr = [...Array(length).keys()];
const randomArray = arr.map((i) => getRandomInt(1, length));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function partition(a) {
  let left = [];
  let center = [];
  let right = [];
  let pivot = a[Math.floor(a.length / 2)];

  for (let i = 0; i < a.length; i++) {
    if (a[i] < pivot) left.push(a[i]);
    if (a[i] === pivot) center.push(a[i]);
    if (a[i] > pivot) right.push(a[i]);
  }

  return { left, center, right };
}

function quickSort(a) {
  if (a.length <= 1) return a;

  let { left, center, right } = partition(a);

  return [...quickSort(left), ...center, ...quickSort(right)];
}

console.log(quickSort(randomArray));
