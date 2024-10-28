function solution(myString, pat) {
  return Number(
    [...myString]
      .map((el) => {
        if (el === "A") {
          return "B";
        } else {
          return "A";
        }
      })
      .join("")
      .includes(pat)
  );
}