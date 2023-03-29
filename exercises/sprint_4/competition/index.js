const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

let winnerSignature1 = "0";
let winnerSignature2 = "1";

const solve = (lines) => {
  let length = Number(lines[0]);
  let results = lines[1].split(" ");

  let balance = 0;
  let balanceRounds = { 0: [0] };
  let result = 0;

  if (length === 0) return `${result}`;

  for (let i = 0; i < results.length; i++) {
    if (results[i] === winnerSignature1) balance += 1;
    if (results[i] === winnerSignature2) balance -= 1;

    if (balanceRounds[balance]) {
      balanceRounds[balance].push(i + 1);
      if (balanceRounds[balance].length > 1)
        result = Math.max(
          result,
          balanceRounds[balance][balanceRounds[balance].length - 1] -
            balanceRounds[balance][0]
        );
    } else {
      balanceRounds[balance] = [i + 1];
    }
  }

  return `${result}`;
};

textFileInput(input, solve);
