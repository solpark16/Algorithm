function solution(s) {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      num++;
    } else if (s[i] === ")") {
      num--;
    }
    if (num < 0) {
      return false;
    }
  }
  if (num > 0) {
    return false;
  }
  return true;
}