function solution(ingredient) {
  let result = 0;
  const arr = "1231";
  const stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4) {
      const burger = stack.slice(-4).join("");
      if (burger === arr) {
        stack.splice(-4);
        result++;
      }
    }
  }

  return result;
}