let result = true;

function solution(root) {
  let recursion = (node, min, max) => {
    let left = node.left;
    let right = node.right;

    if (left) {
      let leftMax = Math.min(node.value, max);
      if (left.value > min && left.value < leftMax) {
        recursion(left, min, leftMax);
      } else {
        result = false;
      }
    }

    if (right) {
      let rightMin = Math.max(node.value, min);
      if (right.value > rightMin && right.value < max) {
        recursion(node.right, rightMin, max);
      } else {
        result = false;
      }
    }
  };

  recursion(root, -Infinity, Infinity);

  return result;
}
