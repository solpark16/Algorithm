function solution(N, stages) {
  const result = [];
  for (let i = 1; i <= N; i++) {
    const filteredStages = stages.filter((el) => el >= i).length;
    const thisStage = stages.filter((el) => el === i).length;
    result.push([i, thisStage / filteredStages]);
  }

  return result
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .map((el) => el[0]);
}