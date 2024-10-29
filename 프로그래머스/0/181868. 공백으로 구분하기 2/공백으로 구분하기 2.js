function solution(my_string) {
  const result = [];
  my_string.split(" ").forEach((el) => {
    if (el) {
      result.push(el);
    }
  });
  return result;
}