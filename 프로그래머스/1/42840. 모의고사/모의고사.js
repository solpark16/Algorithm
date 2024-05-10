function solution(answers) {
      let arr = [[], [], []];
      let num = ['12345','21232425','3311224455']
      let highScore = 0;
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        let score = 0;
        while (arr[i].length < answers.length) {
          arr[i]=[...arr[i],...num[i]];
          if (arr[i].length > answers.length) {
            arr[i].splice(answers.length, arr[i].length - 1);
          }
        }
        for (let j=0; j<answers.length; j++){
          if (+arr[i][j]===answers[j]){
            score++
          }
        }
        if (score > highScore){
          highScore = score;
          result = [i+1];
        } else if (score === highScore){
          result.push(i+1);
        }
      }
    return result;
}