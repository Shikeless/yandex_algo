const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  lines.shift();
  let arr = lines[0].split(" ").map((i) => Number(i));
  let number = Number(lines[1]);

  const conditionFirstDay = (el, number) => {
    return el >= number && el < number * 2;
  };

  const conditionSecondDay = (el, number) => {
    return number <= el;
  };

  const binary = (arr, number, start, finish, condition) => {
    let result = [];
    console.log(`number: ${number}`);
    console.log(`start: ${start}`);
    console.log(`finish: ${finish}`);

    if (finish <= start) {
      // if (condition(arr[start], number)) firstDay = start;
      return;
    }

    const mid = Math.floor((start + finish) / 2);
    console.log(`mid: ${mid}`);

    for (let i = start; i < finish; i++) {
      result.push(arr[i]);
    }
    console.log("result");
    console.log(result);

    if (
      condition(arr[mid], number) &&
      2 <= finish - start &&
      condition(arr[mid - 1], number)
    ) {
      console.log(`index: ${arr[mid]}`);
      console.log(`index-1: ${arr[mid - 1]}`);
      console.log("leftside correction");
      return binary(arr, number, start, mid, condition);
    }
    console.log(arr[mid]);
    console.log(number);
    if (condition(arr[mid], number)) {
      return mid;
    }

    if (number < arr[mid]) {
      console.log("leftside");
      return binary(arr, number, start, mid, condition);
    }
    console.log("rightside");
    return binary(arr, number, mid + 1, finish, condition);
  };

  let firstDay = binary(arr, number, 0, arr.length, conditionFirstDay);
  // let secondDay = binary(arr, number * 2, 0, arr.length, conditionSecondDay);

  console.log(firstDay);
  // console.log(secondDay);
};

// 1 2 4 4 6 8

textFileInput(input, solve);

// const conditionFirstDay = (el, number) => {
//   return el > number && el < number * 2;
// };

// const conditionSecondDay = (el, number) => {
//   return number * 2 <= el;
// };

// const binary = (arr, number, start, finish, condition) => {
//   let result = [];

//   // console.log(`start: ${start}`);
//   // console.log(`finish: ${finish}`);

//   if (finish <= start) {
//     // if (condition(arr[start], number)) firstDay = start;
//     return;
//   }

//   const mid = Math.ceil((start + finish) / 2);
//   // console.log(`mid: ${mid}`);

//   for (let i = start; i < finish; i++) {
//     result.push(arr[i]);
//   }

//   // console.log(result);

//   if (condition(arr[mid], number) && arr[mid] === arr[mid - 1]) {
//     // console.log("leftside correction");
//     return binary(arr, number, start, mid, condition);
//   }

//   if (condition(arr[mid], number)) {
//     return mid;
//   }

//   if (number < arr[mid]) {
//     // console.log("leftside");
//     return binary(arr, number, start, mid, condition);
//   }
//   console.log("rightside");
//   return binary(arr, number, mid + 1, finish, condition);
// };
