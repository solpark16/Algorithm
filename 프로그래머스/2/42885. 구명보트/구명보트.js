function solution(people, limit) {
  people.sort((a, b) => b - a);
  let num = 0;
  for (let i = 0; i < people.length; i++) {
    num++;
    if (people[i] + people[people.length - 1] <= limit) {
      people.pop();
    }
  }
  return num;
}