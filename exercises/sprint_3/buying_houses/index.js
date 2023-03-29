const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let money = Number(lines[0].split(" ")[1]);
  let prices = lines[1].split(" ").map((i) => Number(i));

  prices.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  let afford = 0;

  for (let i = 0; i < prices.length; i++) {
    money -= prices[i];

    if (money < 0) {
      break;
    } else {
      afford++;
    }
  }

  return `${afford}`;
};

textFileInput(input, solve);
