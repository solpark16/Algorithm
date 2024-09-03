function solution(n, arr1, arr2) {
  const binaryArr1 = arr1.map((el) => {
    return el.toString(2).padStart(n, "0");
  });
  const binaryArr2 = arr2.map((el) => {
    return el.toString(2).padStart(n, "0");
  });
  const result = binaryArr1.map((el, idx) => {
    let newEl = [];
    const binaryArr2El = binaryArr2[idx];
    for (let i = 0; i < el.length; i++) {
      if (el[i] === "1" || binaryArr2El[i] === "1") {
        newEl.push("#");
      } else {
        newEl.push(" ");
      }
    }
    return newEl.join("");
  });
  return result;
}