function solution(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " || !isNaN(s[i])) {
      result += s[i];
    } else if (result[result.length - 1] === " " || !result) {
      result += s[i].toUpperCase();
    } else {
      result += s[i].toLowerCase();
    }
  }
  return result;
}