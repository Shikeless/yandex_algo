function era(n) {
  const numbers = Array(n + 1);
  numbers[0] = numbers[1] = false;

  for (let num = 2; num <= n; num++) {
    if (numbers[num] !== false) {
      numbers[num] = num;

      for (let j = num * num; j <= n; j = j + num) {
        numbers[j] = false;
      }
    }
  }

  return numbers;
}
const start = Date.now();
console.log(era(10000000));
const end = Date.now();
console.log(end - start);
