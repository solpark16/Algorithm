function solution(numLog) {
  let result = "";
  for (let i = 1; i < numLog.length; i++) {
    if (numLog[i - 1] + 1 === numLog[i]) {
      result += "w";
    } else if (numLog[i - 1] - 1 === numLog[i]) {
      result += "s";
    } else if (numLog[i - 1] + 10 === numLog[i]) {
      result += "d";
    } else if (numLog[i - 1] - 10 === numLog[i]) {
      result += "a";
    }
  }
  return result;
}