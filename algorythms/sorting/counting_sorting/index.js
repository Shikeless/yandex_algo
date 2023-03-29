// время работы этого алгоритма равна O(n)
// заранее необходимо знать диапозон значений в исходном массиве

const length = 10;

const arr = [...Array(length).keys()];
const randomArray = arr.map((i) => getRandomInt(1, length));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function countingSort(a, length) {
  let counters = Array(length).fill(0);

  for (let i = 0; i < a.length; i++) {
    counters[a[i]]++;
  }

  let index = 0;
  for (let i = 0; i < counters.length; i++) {
    for (let c = 0; c < counters[i]; c++) {
      a[index] = i;
      index++;
    }
  }

  return a;
}
