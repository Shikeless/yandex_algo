function linear(n) {
  const lp = Array(n + 1).fill(0);
  const primes = [];

  for (let i = 2; i < n; i++) {
    if (lp[i] == 0) {
      lp[i] = i;
      primes.push(i);
    }

    for (let p of primes) {
      const x = p * i;

      if (p > lp[i] || x > n) {
        break;
      }

      lp[x] = p;
    }
  }
  console.log(primes);
}

linear(100);
