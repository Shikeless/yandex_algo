// время работы этого алгоритма равна O(n log n)
// создаются и сливаются новые массивы

const length = 1000;

const arr = [...Array(1000).keys()];
const randomArray = arr.map((i) => getRandomInt(1, length));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function merge(a, b) {
  if (!a.length) return b;
  if (!b.length) return a;

  if (a[0] < b[0]) {
    return [a[0]].concat(merge(a.slice(1, a.length), b));
  } else {
    return [b[0]].concat(merge(a, b.slice(1, b.length)));
  }
}

function mergeSort(a) {
  if (a.length <= 1) return a;

  const middle = Math.floor(a.length / 2);

  const leftHalf = a.slice(0, middle);
  const rightHalf = a.slice(middle, a.length);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}
