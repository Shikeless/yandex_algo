const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

let max = 0;

const solve = (lines) => {
  let length1 = Number(lines[0]);
  let scores1 = lines[1].split(" ");
  let length2 = Number(lines[2]);
  let scores2 = lines[3].split(" ");

  let signautes1 = [];
  let signautes2 = [];

  // console.log(scores1);
  // console.log(scores2);

  for (let i = 0; i < length1 - 1; i++) {
    signautes1.push(scores1[i] + "_" + scores1[i + 1]);
  }

  for (let i = 0; i < length2 - 1; i++) {
    signautes2.push(scores2[i] + "_" + scores2[i + 1]);
  }

  console.log(signautes1);
  console.log(signautes2);

  let res = signautes1.find((i) => signautes2.some((x) => x === i));
  console.log(res);

  console.log(signautes1.indexOf(res));
  console.log(signautes2.indexOf(res));
  //   return max.toString();
};

textFileInput(input, solve);
