function solution(dartResult) {
  const arr = [];
  let str = "";

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "*" || dartResult[i] === "#") {
      arr[arr.length - 1] += dartResult[i];
      if (arr.length - 2 >= 0 && dartResult[i] === "*") {
        arr[arr.length - 2] += "*";
      }
    } else {
      str += dartResult[i];
      if (!+dartResult[i] && dartResult[i] !== "0") {
        arr.push(str);
        str = "";
      }
    }
  }
  const result = arr.reduce((acc, cur) => {
    cur[0] = 3;
    let newCur = "";
    for (let i = 0; i < cur.length; i++) {
      if (!isNaN(cur[i])) {
        newCur += cur[i];
      }
      if (cur[i] === "D") {
        newCur = newCur * newCur;
      } else if (cur[i] === "T") {
        newCur = newCur * newCur * newCur;
      } else if (cur[i] === "#") {
        newCur = -newCur;
      } else if (cur[i] === "*") {
        newCur = newCur * 2;
      }
    }
    console.log(newCur);
    return (acc += +newCur);
  }, 0);
  console.log(result);
  return result;
}