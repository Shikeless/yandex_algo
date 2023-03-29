let arr = [...Array(2).keys()];

const bindarySearch = (arr, num) => {
  let result = -1;

  const recursion = (arr, num, start, end) => {
    if (start + 1 >= end) {
      return arr[start] === num ? (result = start) : null;
    }

    const mid = Math.floor((start + end) / 2);
    const value = arr[mid];

    if (value === num) return (result = mid);

    let newStart = value > num ? start : mid;
    let newEnd = value > num ? mid : end;

    return recursion(arr, num, newStart, newEnd);
  };

  recursion(arr, num, 0, arr.length);

  return result;
};

console.log(bindarySearch(arr, 0));
