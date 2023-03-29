// class Node {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

function printRange(root, left, right) {
  const recursion = (node) => {
    if (!node) return [];

    let leftside = node.value >= left ? recursion(node.left) : [];
    let righside = node.value <= right ? recursion(node.right) : [];
    let rangeValue =
      node.value >= left && node.value <= right ? [node.value] : [];
    return [...leftside, ...rangeValue, ...righside];
  };

  let result = recursion(root);

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

function test() {
  var node1 = new Node(2, null, null);
  var node2 = new Node(1, null, node1);
  var node3 = new Node(8, null, null);
  var node4 = new Node(8, null, node3);
  var node5 = new Node(9, node4, null);
  var node6 = new Node(10, node5, null);
  var node7 = new Node(5, node2, node6);
  printRange(node7, 2, 8);
}

// test();
