const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

let max = 0;

const solve = (lines) => {
  let length1 = Number(lines[0]);
  let scores1 = lines[1].split(" ").map((i) => Number(i));
  let length2 = Number(lines[2]);
  let scores2 = lines[3].split(" ").map((i) => Number(i));

  let signautes1 = Array(255);
  let signautes2 = Array(255);

  for (let i = 0; i < Math.max(length1, length2); i++) {
    let score1 = scores1[i];
    let score2 = scores2[i];

    if (Number.isInteger(score1)) {
      if (signautes1[score1]) {
        signautes1[score1].push(i);
      } else {
        signautes1[score1] = [i];
      }
    }

    if (Number.isInteger(score2)) {
      if (signautes2[score2]) {
        signautes2[score2].push(i);
      } else {
        signautes2[score2] = [i];
      }
    }
  }

  for (let i = 0; i < signautes1.length; i++) {
    let signature1 = signautes1[i];
    let signature2 = signautes2[i];

    if (signature1 && signature2) {
      if (
        signature1.length === scores1.length &&
        signature2.length === scores2.length
      ) {
        return Math.min(signature1.length, signature2.length).toString();
      }

      for (let n1 = 0; n1 < signature1.length; n1++) {
        let start1 = signature1[n1];

        for (let n2 = 0; n2 < signature2.length; n2++) {
          let currentMax = 0;
          let start2 = signature2[n2];

          if (max >= Math.min(length1 - 1, length2 - 1)) break;

          while (
            Number.isInteger(scores1[start1]) &&
            Number.isInteger(scores2[start2]) &&
            scores1[start1] === scores2[start2]
          ) {
            while (
              signature1[n1 + 1] < signature1.length &&
              signature2[n2 + 1] < signature2.length &&
              signature1[n1 + 1] - signature1[n1] === 1 &&
              signature2[n2 + 1] - signature2[n2] === 1
            ) {
              currentMax++;
              start1++;
              start2++;
              n1++;
              n2++;
            }
            currentMax++;
            start1++;
            start2++;
          }

          start1 = signature1[n1];

          max = Math.max(max, currentMax);
        }
      }
    }
  }

  return max.toString();
};

textFileInput(input, solve);
