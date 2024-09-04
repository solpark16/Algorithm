function solution(N, stages) {
  const result = [];
  for (let i = 1; i <= N; i++) {
    const filteredStages = stages.filter((el) => el >= i);
    const thisStage = filteredStages.filter((el) => el === i);
    result.push([i, thisStage.length / filteredStages.length]);
  }
  return result
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .map((el) => el[0]);
}