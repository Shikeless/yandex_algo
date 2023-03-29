// перебрать все варианты массивов чисел
// после
// 1 вариант - проверять с первой цифры все коллекции массивов которые совпадают с выбранным и строить деревья с каждым, до тех пор пока не обнаружится расзождение
// 2 вариант - построить дерево для каждого массива чисел, после проверить все деревья на идентичность
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const num = 5;
const numArr = [...Array(num).keys()].map((i) => i + 1);
console.log(numArr);

function generatTrees(arr, start, end) {
  let trees = [];

  if (start > end) {
    trees.push(null);
    return trees;
  }

  for (let i = start; i <= end; i++) {
    console.log(start);
    console.log(end);
    let leftTrees = generatTrees(arr, start, i - 1);
    let rightTrees = generatTrees(arr, i + 1, end);

    for (let l = 0; l < leftTrees.length; l++) {
      for (let r = 0; r < rightTrees; r++) {
        let tree = new Node(arr[i], leftTrees[l], rightTrees[r]);

        trees.push(tree);
      }
    }
  }

  return trees;
}

let trees = generatTrees(numArr, 0, numArr.length - 1);
console.log(trees);
