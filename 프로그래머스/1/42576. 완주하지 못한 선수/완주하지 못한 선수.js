function solution(particpant, completion) {
  const sortedParticipant = particpant.sort();
  const sortedCompletion = completion.sort();
  for (let i = 0; i < sortedParticipant.length; i++) {
    if (sortedParticipant[i] === sortedCompletion[i]) {
      continue;
    }
    return sortedParticipant[i];
  }
}