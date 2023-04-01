let leftside = null;
let rightside = null;

const recalculateSize = (node) => {
  if (!node) return 0;
  node.size = 1;
  node.size += node.left ? recalculateSize(node.left) : 0;
  node.size += node.right ? recalculateSize(node.right) : 0;
  return node.size;
};

function insert(node, newNode) {
  let currentNode = node;

  while (currentNode && newNode) {
    if (currentNode.value > newNode.value) {
      if (currentNode.left) {
        currentNode = currentNode.left;
        continue;
      }
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      }
    }
    if (currentNode.value <= newNode.value) {
      if (currentNode.right) {
        currentNode = currentNode.right;
        continue;
      }
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      }
    }
  }

  recalculateSize(node);
}

const joinLeftSide = (node) => {
  if (!leftside) {
    leftside = node;
  } else {
    return insert(leftside, node);
  }
};

const joinRightSide = (node) => {
  if (!rightside) {
    rightside = node;
  } else {
    return insert(rightside, node);
  }
};

const leftCase = (node, size) => {
  let right = node.right;
  let left = node;

  node.right = null;

  left.size = node.size - (right ? right.size : 0);

  if (node.size === size) {
    joinLeftSide(node);
    joinRightSide(right);
  } else {
    left = node.left;
    node.left = null;
    insert(node, right);

    right = node;
    right.size = right.size - left.size;
    joinRightSide(right);
  }

  return left;
};

const rightCase = (node) => {
  const right = node.right;
  node.right = null;

  recalculateSize(node);
  joinLeftSide(node);

  return right;
};

function split(node, k) {
  if (!node) {
    return [null, null];
  }

  let currentNode = node;
  let currentSize = k;

  while (!leftside || leftside.size !== k) {
    if ((currentNode.left ? currentNode.left.size : 0) + 1 >= currentSize) {
      currentNode = leftCase(currentNode, currentSize);
    } else {
      currentSize =
        currentSize - (currentNode.left ? currentNode.left.size + 1 : 1);
      currentNode = rightCase(currentNode);
    }

    if (leftside && leftside.size + currentNode.size === k) {
      insert(leftside, currentNode);
      break;
    }
  }

  return [leftside, rightside];
}
