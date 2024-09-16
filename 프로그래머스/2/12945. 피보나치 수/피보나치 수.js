function solution(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[arr.length - 1]%1234567 + arr[arr.length - 2]%1234567);
  }
  return arr.pop()%1234567;
}