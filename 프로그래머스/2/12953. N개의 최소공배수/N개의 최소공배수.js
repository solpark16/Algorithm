function solution(arr) {
  let lcm = 1;
  let finish = false;
  while (!finish) {
    for (let i = 0; i < arr.length; i++) {
      if (lcm % arr[i] === 0) {
        if (i === arr.length - 1) {
          finish = true;
          break;
        }
        continue;
      } else {
        lcm++;
        break;
      }
    }
  }
  return lcm;
}