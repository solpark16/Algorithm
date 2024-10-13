function solution(num_list) {
  const arr = [0, 0];
  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      arr[0] += num_list[i];
    } else {
      arr[1] += num_list[i];
    }
  }
  return Math.max(...arr);
}