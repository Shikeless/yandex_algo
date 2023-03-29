const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const a = lines[0];
  const m = lines[1];
  let string = lines[2];

  let pows = [1];
  let hash = [];

  for (let c = 1; c < string.length; c++) {
    pows[c] = (pows[c - 1] * a) % m;
  }

  for (let c = 0; c < string.length; c++) {
    let prevChar = hash[c - 1] || 0;
    let pow = pows[string.length - 1 - c];
    let char = string.charCodeAt(c);

    hash[c] = (prevChar + char * pow) % m;
  }

  // for (let c = 0; c < string.length; c++) {
  //   let prevChar = hash[c - 1];
  //   let pow = pows[c];
  //   let char = string.charCodeAt(c);

  //   hash[c] = prevChar + pow * char;
  // }

  // console.log(pows);

  // let hash = [string.charCodeAt(0)];

  // for (let c = 1; c < string.length; c++) {
  //   let sum = hash[c - 1] * a;
  //   sum += string.charCodeAt(c);
  //   sum = sum % m;
  //   hash.push(sum);
  // }

  // console.log(hash);

  console.log(hash[7]);

  // const getSubstringHash = (left, right) => {
  //   console.log(`left ${left}`);
  //   console.log(`right ${right}`);
  //   let result = hash[right];
  //   if (left > 0) result -= hash[left - 1];
  //   return result;
  // };

  // for (let i = 4; i < lines.length; i++) {
  //   let [left, right] = lines[i].split(" ");

  //   console.log(getSubstringHash(Number(left - 1), Number(right - 1)));
  // }

  // console.log(hash);
};

textFileInput(input, solve);

//[ 71, 236, 183, 181 ] - GOSH
//[ 79, 200, 96 ] - OSH
