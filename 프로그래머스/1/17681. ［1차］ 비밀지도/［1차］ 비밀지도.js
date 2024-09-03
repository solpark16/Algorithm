function solution(n, arr1, arr2) {
  return arr1.map((el, idx) => {
    const newEl = [];
    const el1 = el.toString(2).padStart(n, "0");
    const el2 = arr2[idx].toString(2).padStart(n, "0");
    for (let i = 0; i < el1.length; i++) {
      if (el1[i] === "1" || el2[i] === "1") {
        newEl.push("#");
      } else {
        newEl.push(" ");
      }
    }
    return newEl.join("");
  });
}
