function solution(num_list, n) {
  const splicedNums = num_list.splice(0, n);
  return [...num_list, ...splicedNums];
}