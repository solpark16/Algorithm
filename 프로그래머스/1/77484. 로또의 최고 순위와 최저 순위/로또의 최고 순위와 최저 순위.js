function solution(lottos, win_nums) {
    lottos.sort((a,b)=>b-a);
    let score = [0,0];
    lottos.forEach((num)=>{
        if (win_nums.includes(num)){
            score[0]++;
            score[1]++;
        } else if (num === 0 && win_nums.length > 0) {
            score[0]++;
            win_nums.splice(0,1);
        }
    })
    let rank = [6,6,5,4,3,2,1]
    return score.map((item)=>{
        return rank[item];
    })
}