let nextRow = [];
let result = true;

const scanNode = (node) => {
  let leftMax = 0;
  let rightMax = 0;

  const scanDepths = (node, depths, left) => {
    if (!node) {
      if (left) {
        leftMax = Math.max(depths, leftMax);
      } else {
        rightMax = Math.max(depths, rightMax);
      }
      return;
    }
    if (!node.left && !node.right) {
      if (left) {
        leftMax = Math.max(depths + 1, leftMax);
      } else {
        rightMax = Math.max(depths + 1, rightMax);
      }
      return;
    }

    if (node.left) {
      scanDepths(node.left, depths + 1, left);
    }
    if (node.right) {
      scanDepths(node.right, depths + 1, left);
    }
  };

  scanDepths(node.left, 1, true);
  scanDepths(node.right, 1, false);

  if (node.left) nextRow.push(node.left);
  if (node.right) nextRow.push(node.right);

  if (Math.abs(leftMax - rightMax) > 1) {
    result = false;
  }
};
function solution(root) {
  let nodesForScan = [root];

  while (nodesForScan.length && result) {
    nextRow = [];

    for (let i = 0; i < nodesForScan.length; i++) {
      scanNode(nodesForScan[i]);
    }

    nodesForScan = nextRow;
  }
  return result;
}
