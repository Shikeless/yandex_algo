const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  let counters = Array(10000).fill(null);
  let students = lines[1].split(" ").map((i) => Number(i));
  let num = Number(lines[2]);

  for (let i = 0; i < students.length; i++) {
    if (!counters[students[i]]) {
      counters[students[i]] = {
        id: students[i],
        count: 1,
      };
    }
    counters[students[i]].count++;
  }

  counters = counters.filter((i) => {
    return i;
  });

  counters.sort((a, b) => {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
  });

  let answer = counters.slice(0, num).map((i) => i.id);

  return answer.join(" ");
};

textFileInput(input, solve);
