function solution(arr) {
  let result = [];
  arr.forEach((el) => {
    result = [...result, ...new Array(el).fill(el)];
  });
  return result;
}