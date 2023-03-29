const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let [number, k] = lines[0].split(" ").map((i) => Number(i));

  let stepOne = BigInt(0);
  let stepTwo = BigInt(1);

  const pizano = [stepOne, stepTwo];

  for (let i = 0; i < number; i++) {
    let current = stepOne + stepTwo;
    const rest = current % BigInt(k);

    if (rest === BigInt(1) && pizano[pizano.length - 1] === BigInt(0)) {
      pizano.pop();
      break;
    } else {
      pizano.push(rest);
    }
    stepOne = stepTwo;
    stepTwo = current;
  }

  let offset = number % pizano.length;
  console.log(pizano[offset]);

  // console.log(stepTwo);
  // console.log(stepTwo % pizano.length);
  // console.log(stepTwo % 5);

  // return `${result}`;
};

textFileInput(input, solve);
