function solution(nums) {
  const newNums = [...new Set(nums)];
  if (newNums.length >= nums.length / 2) {
    return nums.length / 2;
  } else {
    return newNums.length;
  }
}