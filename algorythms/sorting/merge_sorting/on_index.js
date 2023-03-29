// время работы этого алгоритма равна O(n log n)
// значения переназначаются в исходном массиве

function merge(arr, left, mid, right) {
  const result = Array(right - left);

  let iLeft = 0;
  let iRight = 0;

  while (left + iLeft < mid && mid + iRight < right) {
    if (arr[left + iLeft] <= arr[mid + iRight]) {
      result[iLeft + iRight] = arr[left + iLeft];
      iLeft += 1;
    } else {
      result[iLeft + iRight] = arr[mid + iRight];
      iRight += 1;
    }
  }

  while (left + iLeft < mid) {
    result[iLeft + iRight] = arr[left + iLeft];
    iLeft++;
  }

  while (mid + iRight < right) {
    result[iLeft + iRight] = arr[mid + iRight];
    iRight++;
  }

  return result;
}

function merge_sort(arr, left, right) {
  if (left + 1 >= right) return;

  let mid = Math.floor((left + right) / 2);

  merge_sort(arr, left, mid);
  merge_sort(arr, mid, right);

  let res = merge(arr, left, mid, right);

  for (let i = left; i < right; i++) {
    arr[i] = res[i - left];
  }
}
