function siftDown(heap, idx) {
  const recursion = (idx) => {
    let leftIndex = idx * 2;
    let rightIndex = idx * 2 + 1;
    let maxIndex = leftIndex;

    if (leftIndex >= heap.length) {
      return idx;
    }

    if (rightIndex < heap.length) {
      maxIndex = heap[leftIndex] > heap[rightIndex] ? leftIndex : rightIndex;
    }

    if (heap[idx] < heap[maxIndex]) {
      const maxValue = heap[maxIndex];
      heap[maxIndex] = heap[idx];
      heap[idx] = maxValue;
      return recursion(maxIndex);
    }

    return idx;
  };

  let result = recursion(idx);

  return result;
}
