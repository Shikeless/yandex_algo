const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

// add solve finction

process.stdin.on("end", () => process.stdout.write(solve(_inputLines)));
