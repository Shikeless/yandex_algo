const { textFileInput } = require("../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let length = lines[0];
  let index = 1;
  let result = [];

  let res = lines.slice(index, lines.length).map((i) => i.split(" "));

  for (let i = 0; i <= length; i++) {
    res.forEach((element) => {
      result.push(element[i]);
    });
  }

  console.log(result.join(" "));
};

textFileInput(input, solve);
