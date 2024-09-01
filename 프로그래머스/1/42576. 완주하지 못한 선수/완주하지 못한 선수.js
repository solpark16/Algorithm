function solution(particpant, completion) {
  particpant.sort();
  completion.sort();
  for (let i = 0; i < particpant.length; i++) {
    if (particpant[i] !== completion[i]) {
      return particpant[i];
    }
  }
}