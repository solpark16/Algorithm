function solution(d, budget) {
  let total = 0;
  let result = 0;
  const sortedD = d.sort((a, b) => a - b);

  sortedD.forEach((price) => {
    if (total + price <= budget) {
      total += price;
      result++;
    } else {
      return false;
    }
  });
  return result;
}