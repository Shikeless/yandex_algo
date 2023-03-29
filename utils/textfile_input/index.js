const _readline = require("readline");
const f = require("fs");

const textFileInput = (input, solve) => {
  const _inputLines = [];

  const _reader = _readline.createInterface({
    input: f.createReadStream(input),
  });

  _reader.on("line", (line) => {
    _inputLines.push(line);
  });

  _reader.on("close", () => solve(_inputLines));
};

exports.textFileInput = textFileInput;
