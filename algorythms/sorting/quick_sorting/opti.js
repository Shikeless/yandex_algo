const length = 2;

const arr = [...Array(length).keys()];
const randomArray = arr.map((i) => getRandomInt(1, 5));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function quickSort(a, start, end, depths) {
  console.log(`depths ${depths}`);
  if (depths > 10) return;

  console.log(" ");
  console.log("quicksort start");
  console.log(a.slice(start, end + 1));
  console.log(" >");
  console.log(`start ${start}`);
  console.log(`end ${end}`);

  if (start >= end) return;

  let pivot = Math.floor((start + end) / 2);
  let pivotNumber = a[pivot];

  // console.log(`pivot ${pivot}`);
  console.log(`pivotNumber ${pivotNumber}`);

  let left = start;
  let right = end;

  while (left < right) {
    console.log(" cycle");
    console.log(`  left: ${left} a[left]: ${a[left]}`);
    console.log(`  right: ${right} a[right]: ${a[right]}`);
    if (a[left] < pivotNumber) {
      left++;
      continue;
    }

    if (a[right] > pivotNumber) {
      right--;
      continue;
    }

    if (a[left] === a[right]) {
      right--;
      continue;
    }
    console.log("switching");

    let lVal = a[left];
    a[left] = a[right];
    a[right] = lVal;
  }

  console.log("sorting result");
  console.log(a.slice(start, end + 1));
  console.log(`left: ${left}`);
  console.log(`right: ${right}`);
  console.log("___________");

  let newDepths = depths + 1;

  quickSort(a, start, left, newDepths);
  quickSort(a, left + 1, end, newDepths);
}

let arr1 = [14, 9, 8, 13, 1, 5, 11, 13, 8, 6, 10, 9, 11, 3, 8, 2];
let arr2 = [4, 6, 2, 2, 4];

// console.log(arr1);
console.log(arr2);
// console.log(randomArray);
console.log("_________");

// quickSort(arr1, 0, arr1.length - 1, 0);
quickSort(arr2, 0, arr2.length - 1, 0);
// quickSort(randomArray, 0, length - 1);
console.log(" ");
console.log("FINISH");
// console.log(arr1);
console.log(arr2);
// console.log(randomArray);

// function partition(a) {
//   let left = [];
//   let center = [];
//   let right = [];
//   let pivot = a[Math.floor(a.length / 2)];

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < pivot) left.push(a[i]);
//     if (a[i] === pivot) center.push(a[i]);
//     if (a[i] > pivot) right.push(a[i]);
//   }

//   return { left, center, right };
// }

// if (left === start && right === end) return;

// console.log(a.slice(start, left + 1));
// console.log(a.slice(right + 1, end + 1));

// for (let l = left; l < right; l++) {
//   if (a[l] < pivotNumber) {
//     left = l;
//     continue;
//   }

//   for (let r = right; r > left; r--) {
//     if (a[r] > pivotNumber) {
//       right = r;
//       continue;
//     }

//     if (a[l] >= pivotNumber && a[r] <= pivotNumber) {
//       console.log("switching");
//       console.log(`l ${l}, a[l] ${a[l]}`);
//       console.log(` r ${r}, a[r] ${a[r]}`);
//       let lNum = a[l];
//       a[l] = a[r];
//       a[r] = lNum;

//       left = l;
//     }
//   }
// }
