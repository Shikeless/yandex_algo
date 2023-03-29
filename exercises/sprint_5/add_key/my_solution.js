class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function insert(node, key) {
  let currentNode = node;

  while (currentNode) {
    if (currentNode.value > key) {
      if (currentNode.left) {
        currentNode = currentNode.left;
        continue;
      }
      if (!currentNode.left) {
        currentNode.left = new Node(key, null, null);
        break;
      }
    }
    if (currentNode.value <= key) {
      if (currentNode.right) {
        currentNode = currentNode.right;
        continue;
      }
      if (!currentNode.right) {
        currentNode.right = new Node(key, null, null);
        break;
      }
    }
  }

  return node;
}

function test() {
  var node1 = new Node(7, null, null);
  var node2 = new Node(8, node1, null);
  var node3 = new Node(7, null, node2);
  var newHead = insert(node3, 6);
  console.assert(newHead === node3);
  console.assert(newHead.left.value === 6);
}
