const _readline = require("readline");
const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

const solve = (lines) => {
  const k = Number(lines[0]);
  const maxPossibleNumber = 9;
  const counters = Array(maxPossibleNumber + 1);
  const numbers = lines
    .slice(1, lines.length)
    .join("")
    .split("")
    .map((i) => Number(i))
    .filter((i) => !isNaN(i));

  let points = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    counters[number] ? counters[number]++ : (counters[number] = 1);
  }

  for (let i = 1; i <= maxPossibleNumber; i++) {
    if (!counters[i]) continue;
    if (k * 2 >= counters[i]) {
      points++;
    }
  }

  return `${points}`;
};

process.stdin.on("end", () => process.stdout.write(solve(_inputLines)));
