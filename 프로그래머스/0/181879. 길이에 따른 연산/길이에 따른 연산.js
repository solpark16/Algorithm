function solution(num_list) {
  return num_list.reduce((arr, cur) => {
    if (num_list.length >= 11) {
      return arr + cur;
    } else {
      return arr * cur;
    }
  });
}