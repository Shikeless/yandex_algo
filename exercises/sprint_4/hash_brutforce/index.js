let charCodeStart = 97;
let charCodeEnd = 122;

let allKeys = [];
let hashesArr = [];
let keysArr = [];
let duplicate = null;

const a = 1000;
const m = 123987123;

const maxlength = 4;
let length = 1;

const hash = (string) => {
  let totalHash = string.charCodeAt(0);

  for (let c = 1; c < string.length; c++) {
    totalHash *= a;
    totalHash += string.charCodeAt(c);
    totalHash = totalHash % m;
  }

  return totalHash;
};

const findDuplicate = (arr) => {
  duplicate = arr.find((i, index) => {
    return arr.lastIndexOf(i) !== index;
  });
};

for (let i = charCodeStart; i <= charCodeEnd; i++) {
  let char = String.fromCharCode(i);
  keysArr.push(char);
  allKeys.push(char);
  hashesArr.push(hash(char));
}

while (length <= maxlength) {
  let newKeys = [];

  for (let k = 0; k < keysArr.length; k++) {
    for (let i = charCodeStart; i <= charCodeEnd; i++) {
      let char = keysArr[k] + String.fromCharCode(i);
      newKeys.push(char);
      allKeys.push(char);
      hashesArr.push(hash(char));
    }
  }

  keysArr = newKeys;

  length++;
}

findDuplicate(Object.values(hashesArr));
