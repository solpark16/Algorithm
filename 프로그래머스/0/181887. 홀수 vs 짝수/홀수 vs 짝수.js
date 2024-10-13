function solution(num_list) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < num_list.length; i++) {
    i % 2 ? (odd += num_list[i]) : (even += num_list[i]);
  }
  return even > odd ? even : odd;
}