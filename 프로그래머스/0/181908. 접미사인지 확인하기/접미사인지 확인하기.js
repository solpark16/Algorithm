function solution(my_string, is_suffix) {
  for (let i = 0; i < is_suffix.length; i++) {
    if (
      is_suffix[is_suffix.length - (1 + i)] !==
      my_string[my_string.length - (1 + i)]
    ) {
      return 0;
    }
  }
  return 1;
}