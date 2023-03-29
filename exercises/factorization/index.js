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

  return numbers.filter((i) => i !== false);
}

const factorization = (n) => {
  if (n < 2) return `${n}`;

  const result = [];
  let i = 2;

  while (i <= Math.sqrt(n)) {
    while (n % i == 0) {
      result.push(i);
      n = n / i;
    }
    i++;
  }

  if (n > 1) result.push(n);

  return result.join(" ");
};

console.log(factorization(104));
