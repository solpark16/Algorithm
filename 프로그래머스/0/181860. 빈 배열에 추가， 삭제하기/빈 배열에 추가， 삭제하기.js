function solution(arr, flag) {
  let X = [];
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      X = [...X, ...new Array(arr[i] * 2).fill(arr[i])];
    } else {
      X = X.slice(0, X.length - arr[i]);
    }
  }
  return X;
}