const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const left = [];
const right = [];
let hStack = [];
let max = 0;

const solve = (lines) => {
  const bars = lines[0].split("").map((i) => Number(i));
  const length = bars.length;
  const lengthOffset = 1;
  const edgeStartIndex = -1;

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      left.push(edgeStartIndex);
      hStack.push({ h: bars[i], i });
      continue;
    }

    while (
      hStack[hStack.length - lengthOffset] &&
      bars[i] <= hStack[hStack.length - lengthOffset].h
    ) {
      hStack.pop();
    }

    const minimal = hStack[hStack.length - lengthOffset];

    left.push(minimal ? minimal.i : edgeStartIndex);
    hStack.push({ h: bars[i], i });
  }

  hStack = [];

  for (let i = bars.length - lengthOffset; i >= 0; i--) {
    if (i === bars.length - lengthOffset) {
      right[length - lengthOffset] = length;
      hStack.push({ h: bars[i], i });
      continue;
    }
    while (
      hStack[hStack.length - lengthOffset] &&
      bars[i] < hStack[hStack.length - lengthOffset].h
    ) {
      hStack.pop();
    }

    const minimal = hStack[hStack.length - lengthOffset];

    right[i] = minimal ? minimal.i : length;
    hStack.push({ h: bars[i], i });
  }

  for (let i = 0; i < bars.length; i++) {
    max = Math.max((right[i] - left[i] - 1) * bars[i], max);
  }

  console.log(max);
};

textFileInput(input, solve);
