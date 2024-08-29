function solution(name, yearning, photo) {
  return photo.map((el) => {
    let score = 0;
    for (let i = 0; i < el.length; i++) {
      for (let j = 0; j < name.length; j++) {
        if (el[i] === name[j]) {
          score += yearning[j];
          break;
        }
      }
    }
    return score;
  });
}