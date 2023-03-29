const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  lines.shift();
  let wishes = lines[0].split(" ").map((i) => Number(i));

  lines.shift();
  lines.shift();
  let cookies = lines[0].split(" ").map((i) => Number(i));

  wishes.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  cookies.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  let satisfied = 0;

  let iW = 0;
  let iC = 0;

  for (let i = iW; i < wishes.length; i++) {
    if (iC === cookies.length) break;
    for (let n = iC; n < cookies.length; n++) {
      // console.log(`wish ${wishes[i]}`);
      // console.log(`cookie ${cookies[n]}`);
      iC++;
      if (wishes[i] <= cookies[n]) {
        satisfied++;
        break;
      }
    }
  }

  // console.log(satisfied);

  // console.log(wishes);
  // console.log(cookies);

  return `${satisfied}`;
};

textFileInput(input, solve);
