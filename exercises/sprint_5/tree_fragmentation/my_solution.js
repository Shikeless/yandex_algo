// class Node {
//   constructor(value, left = null, right = null, size = 0) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//     this.size = size;
//   }
// }

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
  node.size = node.size - (right ? right.size : 0);

  joinLeftSide(node);

  return right;
};

function split(node, k) {
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

// function test() {
//   const node10 = new Node(858, null, null, 1);
//   const node9 = new Node(701, null, null, 1);
//   const node8 = new Node(763, node9, node10, 3);
//   const node7 = new Node(442, null, null, 6);
//   const node6 = new Node(302, null, node7, 6);
//   const node5 = new Node(130, null, null, 3);
//   const node4 = new Node(220, node5, node6, 1);
//   const node3 = new Node(545, node4, node8, 1);
//   const node2 = new Node(31, null, node3, 2);
//   const node1 = new Node(867, node2, null, 1);

//   const res = split(node1, 7);

//   console.assert(res[0].size === 4);
//   console.assert(res[1].size === 2);
// }

// test();
