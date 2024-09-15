function solution(n) {

  const filteredN = n
    .toString(2)
    .split("")
    .filter((el) => el === "1").length;

  let i = n + 1;
  while (true) {
    const filteredI = i
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
    if (filteredI === filteredN) {
      return i;
    }
    i++;
  }
}