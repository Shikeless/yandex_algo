const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let powHash = new Map();
  let sqrtHash = new Map();
  const exitsLength = Number(lines[0]);
  const exitsOffset = 1 + exitsLength;
  const stopsLength = Number(lines[exitsOffset]);
  let exits = [];
  let stops = [];
  let max = 0;
  let maxIndex = 0;

  let getPow = (number) => {
    let abs = Math.abs(number);
    let mapValue = powHash.get(abs);

    if (mapValue) return mapValue;

    let value = Math.pow(abs, 2);

    powHash.set(abs, value);

    return value;
  };

  let getSqrt = (number) => {
    let abs = Math.abs(number);
    let mapValue = sqrtHash.get(abs);

    if (mapValue) return mapValue;

    let value = Math.sqrt(abs);

    sqrtHash.set(abs, value);

    return value;
  };

  for (let i = 1; i <= exitsLength; i++) {
    exits.push(lines[i].split(" ").map((i) => Number(i)));
  }

  for (let i = exitsLength + 2; i <= exitsOffset + stopsLength; i++) {
    stops.push(lines[i].split(" ").map((i) => Number(i)));
  }

  for (let i = 0; i < exits.length; i++) {
    let total = 0;
    let exit = exits[i];
    // console.log(`exit ${exit}`);
    for (let s = 0; s < stops.length; s++) {
      let stop = stops[s];

      let xDif = exit[0] - stop[0];
      let yDif = exit[1] - stop[1];

      let range = getPow(xDif) + getPow(yDif);

      if (range <= 400) total++;
    }

    if (total > max) {
      max = total;
      maxIndex = i;
    }
  }

  // console.log(`${maxIndex + 1}`);
  return `${maxIndex + 1}`;
};

textFileInput(input, solve);
