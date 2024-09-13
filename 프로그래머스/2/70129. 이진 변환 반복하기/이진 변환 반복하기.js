function solution(s) {
  const result = [0, 0];
  while (s !== "1") {
    const zero = s.split("").filter((el) => el !== "0");
    result[0] += 1;
    result[1] += s.length - zero.length;
    s = zero.join("").length.toString(2);
  }
  return result;
}