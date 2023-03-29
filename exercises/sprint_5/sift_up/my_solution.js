function siftUp(heap, idx) {
  const recursion = (idx) => {
    let parentIndex = Math.floor(idx / 2);

    if (parentIndex < 1) return idx;
    if (heap[parentIndex] > heap[idx]) return idx;

    let maxValue = heap[idx];
    heap[idx] = heap[parentIndex];
    heap[parentIndex] = maxValue;

    return recursion(parentIndex);
  };

  let result = recursion(idx);

  return result;
}
