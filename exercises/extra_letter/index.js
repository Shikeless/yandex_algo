const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

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

const solve = (lines) => {
  const firsrtLetter = lines[0];
  const lastLetter = lines[1];

  const firstSorted = mergeSort(firsrtLetter.split(""));
  const lastSorted = mergeSort(lastLetter.split(""));

  console.log(firstSorted);
  console.log(lastSorted);

  let result;

  let startIndex = 0;
  let endIndex = lastSorted.length - 1;

  while (startIndex < endIndex && !result) {
    if (firstSorted[startIndex] !== lastSorted[startIndex]) {
      result = lastSorted[startIndex];
      break;
    }

    if (firstSorted[endIndex - 1] !== lastSorted[endIndex]) {
      result = lastSorted[endIndex];
      break;
    }

    endIndex--;
    startIndex++;
  }

  if (!result) result = lastSorted[startIndex];

  return result;
};

textFileInput(input, solve);
