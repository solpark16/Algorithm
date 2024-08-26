function solution(s, skip, index) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < skip.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (skip[i] === alphabet[j]) {
        alphabet.splice(j, 1);
        break;
      }
    }
  }
  const result = s.split("").map((sWord) => {
    let changedWord = alphabet.indexOf(sWord) + index;
    if (changedWord >= alphabet.length) {
      changedWord = changedWord % alphabet.length;
    }
    return alphabet[changedWord];
  });
  return result.join("");
}