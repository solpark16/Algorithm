function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let newLost = [...lost];
  let newReserve = [...reserve];
  reserve.forEach((item) => {
    if (lost.includes(item)) {
      newLost.splice(newLost.indexOf(item), 1);
      newReserve.splice(newReserve.indexOf(item), 1);
    }
  });
  for (let i = 0; i < newLost.length; i++) {
    if (newReserve.includes(newLost[i] - 1)) {
      newReserve.splice(newReserve.indexOf(newLost[i] - 1), 1);
    } else if (newReserve.includes(newLost[i] + 1)) {
      newReserve.splice(newReserve.indexOf(newLost[i] + 1), 1);
    } else {
      n--;
    }
  }
  return n;
}