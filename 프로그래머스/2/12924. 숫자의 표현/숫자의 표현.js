function solution(n) {
  let result = 1;
  const floorNum = Math.floor(n / 2);
  for (let i = 1; i <= floorNum; i++) {
    let num = i;
    let j = i + 1;
    while (num < n) {
      num += j;
      if (num === n) {
        result++;
        break;
      } else if (num > n) {
        break;
      }
      j++;
    }
  }
  return result;
}