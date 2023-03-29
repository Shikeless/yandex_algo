const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const sHash = [];
const tHash = [];

const successString = "YES";
const failString = "NO";

const solve = (lines) => {
  let s = lines[0];
  let t = lines[1];

  if (s.length !== t.length) {
    return failString;
  }

  for (let i = 0; i < s.length; i++) {
    const sCharCode = s.charCodeAt(i);
    const tCharCode = t.charCodeAt(i);

    sHash[sCharCode] ? (sHash[sCharCode] += i) : (sHash[sCharCode] = i);
    tHash[tCharCode] ? (tHash[tCharCode] += i) : (tHash[tCharCode] = i);
  }

  for (let i = 0; i < s.length; i++) {
    const sCharCode = s.charCodeAt(i);

    if (!sHash[sCharCode]) continue;

    const tCharCode = t.charCodeAt(i);

    const sCurrentHash = sHash[sCharCode];
    const tCurrentHash = tHash[tCharCode];

    if (sCurrentHash !== tCurrentHash) {
      return failString;
    }

    sHash[sCharCode] = undefined;
  }

  return successString;
};

textFileInput(input, solve);
