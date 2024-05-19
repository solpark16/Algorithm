function solution(keymap, targets) {
  return targets.map((target) => {
    let targetArr = [...target];
    let countSum = 0;
    for (let i = 0; i < targetArr.length; i++) {
      let count = 0;
      for (let j = 0; j < keymap.length; j++) {
        if (keymap[j].includes(target[i])) {
            if (count === 0 || count > keymap[j].indexOf(target[i]) + 1) {
                count = keymap[j].indexOf(target[i]) + 1;
            }
        }
      }
      if (count === 0) return -1;
      else countSum += count;
    }
    return countSum;
  });
}