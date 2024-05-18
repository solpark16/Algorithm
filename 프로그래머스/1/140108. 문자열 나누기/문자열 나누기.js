function solution(s) {
  let strArr = [...s];
  let count = 0;
  let newArr = [[], []];
  for (let i = 0; i < strArr.length; i++) {
    if (newArr[0].length === 0 || strArr[i] === newArr[0][0]) {
      newArr[0].push(strArr[i]);
    } else if (strArr[i] !== newArr[0][0]) {
      newArr[1].push(strArr[i]);
    }
    if (newArr[0].length === newArr[1].length || i === strArr.length - 1) {
      count++;
      newArr = [[], []];
    }
  }
  return count;
}