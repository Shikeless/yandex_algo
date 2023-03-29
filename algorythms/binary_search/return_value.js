let arr = [...Array(10000000).keys()];

const bindarySearch = (arr, num) => {
  let result;

  const recursion = (arr, num) => {
    if (arr.length === 1 && arr[0] !== num) return (result = undefined);

    const mid = Math.floor(arr.length / 2);
    const value = arr[mid];

    if (value === num) return (result = value);

    return recursion(
      value > num ? arr.slice(0, mid) : arr.slice(mid, arr.length),
      num
    );
  };

  recursion(arr, num);

  return result;
};

console.log(bindarySearch(arr, 7812784));
