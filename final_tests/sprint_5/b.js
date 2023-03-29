// -- ПРИНЦИП РАБОТЫ --
// Основа логики решения построена на описании из урока
// https://practicum.yandex.ru/learn/algorithms/courses/7f101a83-9539-4599-b6e8-8645c3f31fad/sprints/102210/topics/e7dbf42a-fd5a-434b-990d-9cfe0e3a10c8/lessons/03eb9b46-4c74-43b4-8d00-a125aeed47bf/
// Добавлена обработка нескольких кейсов: подгодящий для замены узел является прямым наследником (сыном) удаляемого узла,
// левая ветка удаляемого ёлемента пуста, удаляемый элемент является корнем дерева.

// -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
// При замене удаляемого узла возможны следующие кейсы:
// 1 - крайный правый элемент найден в левой ветке, и он не является прямым наследником
// 2 - крайный правый элемент найден в левой ветке, и он является прямым наследником
// 3 - левая ветка пуста
// 4 - обе ветки пусты
// 5 - удаляемый элемент является единственным в дереве
// 6 - подходящий элемент для удаления не найден
//
// 1 - По услвию мы имеем правильное дерево уникальных ключей, а это значит что найденый элемент будет
// гарантировано меньше всех элементов в правой ветке удаляемого элемента, и больше все остальных элементов
// в левой ветки. Все наследники этого элемента, в свою очередь, больше его родителя. Отсюда следует, что если
// мы переместим элемент на место удаляемого узла, а наследники элемента станут правой веткой его родителя,
// мы сохраним структуру дерева, и условие будет выполнено.
// 2 - отличия с первым случаем состоят в том, что нет необходимость перепревязывать наследников найденого элемента
// к его родителю, по-сколько родитель является удаляемым элементом. Найденый элемент вместе со всеми наследниками
// встает на место удаляемого, корректность структуры дерева при этом сохраняется.
// 3 - левая ветвь пуста, что значит что верхний узел правой ветки удаляемого элемента вместе со всеми наследниками
// встает на место удаляемого.
// 4 - Ничего перемещать не требуется, мы просто удаляем элемент и возвращаем корень дерева
// 5 - В этом случае мы удалили единственный элемент в дереве, и возвращаем null
// 6 - Элемента для удаления не найденом, мы возвращаем корень исходного дерева без изменений.

// -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
// Сумарная сложность поиска удаляемого элемента, и подходящего для замены элемента не привышает O(h), где h - высота дерева.
// Для замены узлов дерева потребуется константное колличество операций.
// Итоговая сложность алгоритма = O(h)

// -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
// Для каждого узла в дереве потребуется память, итоговая пространственная сложность = O(n), где n - количество узлов

// id успешной попытки - 84443204

const findRemovableNode = (node, key, parent) => {
  const result = { removableNode: null, removableParent: null };

  if (!node) return { removableNode: null, removableParent: null };
  if (node.value === key) {
    result.removableNode = node;
    result.removableParent = parent;
    return result;
  }

  if (node.value <= key) return findRemovableNode(node.right, key, node);
  if (node.value > key) return findRemovableNode(node.left, key, node);
};

const findRightEdgeInheritor = (node, parent) => {
  const result = { inheritorNode: null, inheritorParent: null };

  if (!node) return result;
  if (!node.right) {
    result.inheritorNode = node;
    result.inheritorParent = parent;
    return result;
  }
  return findRightEdgeInheritor(node.right, node);
};

const replaceParentNodeInheritor = (newNode, oldNode, oldNodeParent) => {
  if (oldNodeParent.left && oldNodeParent.left.value === oldNode.value) {
    oldNodeParent.left = newNode;
  } else {
    oldNodeParent.right = newNode;
  }
};

const replaceInheritorNode = (
  newNode,
  oldNode,
  oldNodeParent,
  newNodeParent,
  root
) => {
  if (newNode) {
    if (newNodeParent.value !== oldNode.value) {
      newNodeParent.right = newNode.left;

      newNode.left = oldNode.left;
      newNode.right = oldNode.right;
    } else {
      if (oldNode.left && oldNode.left.value === newNode.value) {
        newNode.right = oldNode.right;
      }
    }
  }

  if (oldNodeParent) {
    replaceParentNodeInheritor(newNode, oldNode, oldNodeParent);
    return root;
  }

  return newNode;
};

function remove(node, key) {
  let { removableNode, removableParent } = findRemovableNode(node, key);

  if (!removableNode) return node;

  let { inheritorNode, inheritorParent } = findRightEdgeInheritor(
    removableNode.left,
    removableNode
  );

  return replaceInheritorNode(
    inheritorNode || removableNode.right,
    removableNode,
    removableParent,
    inheritorParent || removableNode,
    node
  );
}
