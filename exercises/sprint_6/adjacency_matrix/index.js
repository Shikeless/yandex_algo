// Условие:
// Алла успешно справилась с предыдущим заданием, и теперь ей дали новое.
// На этот раз список рёбер ориентированного графа надо переводить в матрицу смежности.
// Конечно же, Алла попросила вас помочь написать программу для этого.

// Формат ввода:
// В первой строке дано число вершин n (1 ≤ n ≤ 100) и число рёбер m (1 ≤ m ≤ n(n-1)).
// В следующих m строках заданы ребра в виде пар вершин (u,v), если ребро ведет от u к v.

// Формат вывода:
// Выведите матрицу смежности n на n. На пересечении i-й строки и j-го столбца стоит единица,
// если есть ребро, ведущее из i в j.

const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const [nodes, edges] = lines[0].split(" ");
  let list = [...Array(Number(nodes)).fill(undefined)];

  list = list.map((i) => [...Array(Number(nodes)).fill(0)]);

  for (let i = 1; i <= Number(edges); i++) {
    const [u, v] = lines[i].split(" ");

    list[Number(u - 1)][Number(v - 1)] = 1;
  }

  return list.map((i) => i.join(" ")).join("\n");
};

textFileInput(input, solve);
