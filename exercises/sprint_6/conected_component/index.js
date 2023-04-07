// условие:
// Вам дан неориентированный граф. Найдите его компоненты связности.

// Формат ввода:
// В первой строке дано количество вершин n (1≤ n ≤ 10^5) и рёбер m (0 ≤ m ≤ 2 ⋅ 10^5).
// В каждой из следующих m строк записано по ребру в виде пары вершин 1 ≤ u, v ≤ n.
// Гарантируется, что в графе нет петель и кратных рёбер.

// Формат вывода:
// Выведите все компоненты связности в следующем формате: в первой строке выведите общее количество компонент.
// Затем на отдельных строках выведите вершины каждой компоненты, отсортированные по возрастанию номеров.
// Компоненты между собой упорядочивайте по номеру первой вершины.

const { textFileInput } = require("../../../utils/textfile_input/index");
const input = "./input.txt";

const solve = (lines) => {
  const [nodes, edges] = lines[0].split(" ");
  const list = [...Array(Number(nodes)).fill(undefined)];
  const colors = [...Array(Number(nodes)).fill(-1)];
  const result = [];

  let colorCounter = 1;

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

      if (colors[v] === -1) {
        colors[v] = 0;

        stack.push(v);

        if (!list[v]) continue;

        for (let i = 0; i < list[v].length; i++) {
          let w = list[v][i];
          if (colors[w] === -1) stack.push(w);
        }
      }
      if (colors[v] === 0) colors[v] = colorCounter;
    }
  };

  for (let i = 0; i < list.length; i++) {
    if (colors[i] === -1) {
      dfs(i);
      colorCounter++;
    }
  }

  result.push(`${colorCounter - 1}`);

  for (let i = 0; i < colors.length; i++) {
    let index = colors[i];
    if (!result[index]) result[index] = "";
    result[index] += `${i + 1} `;
  }

  return result.map((i) => i.trim()).join("\n");
};

textFileInput(input, solve);
