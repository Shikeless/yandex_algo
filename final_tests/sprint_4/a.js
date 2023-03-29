// -- ПРИНЦИП РАБОТЫ --
// Для эфективной оценки релевантности документа по поисковой строке программа собирает данные для каждой подстроки
// каждого документа и сохраняет их под соответсвующим ключем в хэш таблице.
// После этого для каждой подстроки каждой поисковой строки из хэш таблицы акумулируются количества вхождений для каждого документа
// Итоговые данные сортируются и на их основе выводится результат

// -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
// Ключем в хэш таблице являются подстроки из документов. Если подобная подстрока встречается в поисковой, данные о ней
// будут лежать в таблице. Нам только необходимо пересложить все взождения для каждой подстроки в поисковой строке.

// -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
// Временная сложность данного алгоритма зависит от трех параметров: количества уникальных подстрок в документах и поисковых строоках,
// ,количества документов и количества поисковых строк. Точную временную сложность, не знаю заранее значения этих параметров определить
// прорблематично. Сложность можно примерно оценить как O(stringsLength * uniqSubstrings * docsLength)

// -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
// Нам необходимо хранить ключи всех уникальных подстрок и счетчики вхождения для каждого документа, на это потребуется O(uniqSubstrings * docsLength)

// id успешной попытки - 83510235

const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

let result = [];
const offset = 1;
const docsHashTables = {};

const collectData = (lines) => {
  let docsLength = Number(lines[0]);
  let docsOffset = offset;
  let stringsLength = Number(lines[docsOffset + docsLength]);
  let stringsOffset = docsOffset + docsLength + 1;

  return { docsLength, docsOffset, stringsLength, stringsOffset };
};

const fillDocsTable = (lines, docsOffset, docsLength) => {
  for (let i = docsOffset; i <= docsLength; i++) {
    let arr = lines[i].split(" ");

    for (let n = 0; n < arr.length; n++) {
      if (!docsHashTables[arr[n]]) docsHashTables[arr[n]] = {};
      if (!docsHashTables[arr[n]][i]) {
        docsHashTables[arr[n]][i] = 1;
      } else {
        docsHashTables[arr[n]][i] += 1;
      }
    }
  }
};

const calculateSearchStringsRates = (lines, stringsOffset, stringsLength) => {
  for (let i = stringsOffset; i < stringsOffset + stringsLength; i++) {
    let total = {};

    let arr = new Set(lines[i].split(" "));
    arr = Array.from(arr);

    for (let n = 0; n < arr.length; n++) {
      if (!docsHashTables[arr[n]]) continue;

      for (let key in docsHashTables[arr[n]]) {
        if (total[key]) {
          total[key] += docsHashTables[arr[n]][key];
        } else {
          total[key] = docsHashTables[arr[n]][key];
        }
      }
    }

    result.push(
      Object.entries(total)
        .filter((i) => i[1] > 0)
        .sort((a, b) => {
          if (a[1] < b[1]) return 1;
          if (a[1] > b[1]) return -1;
          return 0;
        })
        .slice(0, 5)
        .map((i) => Number(i[0]))
    );
  }
};

const solve = (lines) => {
  let { docsLength, docsOffset, stringsLength, stringsOffset } =
    collectData(lines);

  fillDocsTable(lines, docsOffset, docsLength);
  calculateSearchStringsRates(lines, stringsOffset, stringsLength);

  return result.map((i) => i.join(" ")).join("\n");
};

process.stdin.on("end", () => process.stdout.write(solve(_inputLines)));
