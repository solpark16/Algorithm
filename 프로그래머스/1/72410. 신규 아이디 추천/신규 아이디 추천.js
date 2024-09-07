function solution(new_id) {
  let result = [];
  const checkEng = /[a-z]/;
  const checkNum = /[0-9]/;
  const checkSpcl = /[-_.]/;

  for (let i = 0; i < new_id.length; i++) {
    if (new_id[i].toLowerCase() !== new_id[i]) {
      result.push(new_id[i].toLowerCase());
    } else if (
      checkEng.test(new_id[i]) ||
      checkNum.test(new_id[i]) ||
      checkSpcl.test(new_id[i])
    ) {
      result.push(new_id[i]);
    }
  }
  for (let i = 1; i < result.length; i++) {
    if (result[i] === "." && result[i - 1] === ".") {
      result.splice(i, 1);
      i = i - 1;
    }
  }
  if (result[0] === ".") {
    result.splice(0, 1);
  }
  if (result[result.length - 1] === ".") {
    result.splice(result.length - 1, 1);
  }
  if (result.length === 0) {
    result = ["a"];
  }
  if (result.length >= 16) {
    result.length = 15;
    if (result[result.length - 1] === ".") {
      result.splice(result.length - 1, 1);
    }
  }
  if (result.length <= 2) {
    for (let i = 0; i < 3; i++) {
      if (!result[i]) {
        result.push(result[result.length - 1]);
      }
    }
  }

  return result.join("");
}