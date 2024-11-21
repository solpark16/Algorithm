function solution(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < n; j++) {
      if (j === i) {
        result[i].push(1);
      } else {
        result[i].push(0);
      }
    }
  }
  return result;
}