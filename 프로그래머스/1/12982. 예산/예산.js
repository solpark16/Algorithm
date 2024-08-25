function solution(d, budget) {
  let total = 0;
  let result = 0;
  const sortedD = d.sort((a, b) => a - b);

  for (let i = 0; i < sortedD.length; i++) {
    if (total + sortedD[i] <= budget) {
      total += sortedD[i];
      result++;
    } else {
      break;
    }
  }

  return result;
}