function solution(n) {
  function collatz(n) {
    if (n % 2 === 0) {
      return n / 2;
    } else {
      return 3 * n + 1;
    }
  }

  const result = [];
  while (n !== 1) {
    result.push(n);
    n = collatz(n);
  }
  result.push(1);
  return result;
}