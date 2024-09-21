function solution(n) {
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  console.log(dp[n]);
  return dp[n];
}