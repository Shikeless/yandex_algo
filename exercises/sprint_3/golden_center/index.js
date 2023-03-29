const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  lines.shift();
  lines.shift();

  let north = lines[0].split(" ");
  let south = lines[1].split(" ");

  function merge(arr1, arr2) {
    const result = Array(arr1.length + arr2.length);

    let iLeft = 0;
    let iRight = 0;

    while (iLeft < arr1.length && iRight < arr2.length) {
      if (Number(arr1[iLeft]) <= Number(arr2[iRight])) {
        result[iLeft + iRight] = Number(arr1[iLeft]);
        iLeft += 1;
      } else {
        result[iLeft + iRight] = Number(arr2[iRight]);
        iRight += 1;
      }
    }

    while (iLeft < arr1.length) {
      result[iLeft + iRight] = Number(arr1[iLeft]);
      iLeft++;
    }

    while (iRight < arr2.length) {
      result[iLeft + iRight] = Number(arr2[iRight]);
      iRight++;
    }

    return result;
  }

  let mergedArray = merge(north, south);

  let mid = mergedArray.length / 2;

  let mediane = Number.isInteger(mid)
    ? (mergedArray[mid - 1] + mergedArray[mid]) / 2
    : mergedArray[Math.floor(mid)];
  console.log(mediane);
  return `${mediane}`;
};

textFileInput(input, solve);
