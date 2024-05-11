    function solution(nums) {
      let count = 0;
      for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
          third: for (let k = j + 1; k < nums.length; k++) {
            let num = nums[i] + nums[j] + nums[k];
            for (let l = 2; l < num; l++) {
              if (num%l===0){
                continue third;
              }
            }
            count++;
          }
        }
      }
      return count;
    }