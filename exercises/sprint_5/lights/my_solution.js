let max = -Infinity;

function solution(root) {
  let recursion = (node) => {
    if (max < node.value) {
      max = node.value;
    }
    if (node.left) solution(node.left);
    if (node.right) solution(node.right);
  };

  recursion(root);

  return max;
}
