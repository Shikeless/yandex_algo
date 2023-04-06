// условие:
// Задан неориентированный граф. Обойдите поиском в ширину все вершины, достижимые из заданной вершины s,
// и выведите их в порядке обхода, если начинать обход из s.

// Формат ввода:
// В первой строке дано количество вершин n (1 ≤ n ≤ 105) и рёбер m (0 ≤ m ≤ 105).
// Далее в m строках описаны рёбра графа. Каждое ребро описывается номерами двух вершин u и v (1 ≤ u, v ≤ n).
// В последней строке дан номер стартовой вершины s (1 ≤ s ≤ n).
// Гарантируется, что в графе нет петель и кратных рёбер.

// Формат вывода:
// Выведите вершины в порядке обхода, считая что при запуске от каждой конкретной вершины её соседи будут
// рассматриваться в порядке возрастания (то есть если вершина 2 соединена с 1 и 3,
// то сначала обход пойдёт в 1, а уже потом в 3).

const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const white = "white";
const gray = "gray";
const black = "black";

const solve = (lines) => {
  const [nodes, edges] = lines[0].split(" ");
  const start = Number(lines[lines.length - 1]);
  const list = [...Array(Number(nodes)).fill(undefined)];
  const colors = [...Array(Number(nodes)).fill(white)];
  const result = [];

  for (let i = 1; i <= Number(edges); i++) {
    const [u, v] = lines[i].split(" ");
    list[Number(u - 1)]
      ? list[Number(u - 1)].push(Number(v - 1))
      : (list[Number(u - 1)] = [Number(v - 1)]);

    list[Number(v - 1)]
      ? list[Number(v - 1)].push(Number(u - 1))
      : (list[Number(v - 1)] = [Number(u - 1)]);
  }

  for (let i = 0; i < list.length; i++) {
    if (list[i]) list[i].sort((a, b) => b - a);
  }

  const dfs = (node) => {
    let stack = [];

    stack.push(node);

    while (stack.length) {
      let v = stack.pop();

      if (colors[v] === white) {
        result.push(v + 1);
        colors[v] = gray;

        stack.push(v);

        if (!list[v]) continue;

        for (let i = 0; i < list[v].length; i++) {
          let w = list[v][i];
          if (colors[w] === white) stack.push(w);
          if (colors[w] === gray) colors[w] = black;
        }
      }
      if (colors[v] === gray) colors[v] = black;
    }
  };

  dfs(start - 1);

  return result.join(" ");
};

textFileInput(input, solve);
