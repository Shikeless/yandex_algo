// Дано BST. Надо вставить узел с заданным ключом. Ключи в дереве могут повторяться.
// На вход функции подаётся корень корректного бинарного дерева поиска и ключ, который надо вставить в дерево.
// Осуществите вставку этого ключа. Если ключ уже есть в дереве, то его дубликаты уходят в правого сына.
// Таким образом вид дерева после вставки определяется однозначно. Функция должна вернуть корень дерева после вставки вершины.

// class Node {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

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
