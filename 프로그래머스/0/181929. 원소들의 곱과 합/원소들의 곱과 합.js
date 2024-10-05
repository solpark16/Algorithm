function solution(num_list) {
  let add = num_list[0];
  let mul = num_list[0];
  for (let i = 1; i < num_list.length; i++) {
    add += num_list[i];
    mul = mul * num_list[i];
  }
  return add * add > mul ? 1 : 0;
}