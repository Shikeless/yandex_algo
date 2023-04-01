// Гоша повесил на стену гирлянду в виде бинарного дерева, в узлах которого находятся лампочки.
// У каждой лампочки есть своя яркость. Уровень яркости лампочки соответствует числу, расположенному в узле дерева.
// Помогите Гоше найти самую яркую лампочку в гирлянде, то есть такую, у которой яркость наибольшая.

let max = -Infinity;

function solution(root) {
  let recursion = (node) => {
    max = Math.max(node.value, max);

    if (node.left) recursion(node.left);
    if (node.right) recursion(node.right);
  };

  recursion(root);

  return max;
}
