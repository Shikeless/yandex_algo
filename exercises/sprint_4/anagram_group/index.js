const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

let mod = 97;
let data = [];
let result = [];

const solve = (lines) => {
  let length = Number(lines[0]);
  let strings = lines[1].split(" ");

  for (let s = 0; s < length; s++) {
    let string = strings[s];
    let letterData = { marked: false, indexes: Array(25), signature: "" };

    for (let c = 0; c < string.length; c++) {
      let hash = string.charCodeAt(c) % mod;
      if (letterData.indexes[hash]) {
        letterData.indexes[hash]++;
      } else {
        letterData.indexes[hash] = 1;
      }
    }

    for (let i = 0; i < letterData.indexes.length; i++) {
      if (letterData.indexes[i]) {
        letterData.signature += `${i}${letterData.indexes[i]}`;
      }
    }

    data.push(letterData);
  }

  for (let d = 0; d < data.length; d++) {
    if (!data[d].marked) {
      data[d].marked = true;
      let stringResult = [d];
      for (let r = d + 1; r < data.length; r++) {
        if (data[r].signature === data[d].signature) {
          stringResult.push(r);
          data[r].marked = true;
        }
      }

      result.push(stringResult);
    }
  }

  return result.map((i) => i.join(" ")).join("\n");
};
textFileInput(input, solve);
