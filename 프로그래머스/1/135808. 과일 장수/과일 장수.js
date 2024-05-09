function solution(k, m, score) {
    score.sort((a,b)=>b-a);
    let result = 0;
    // while (score.length >= m){
    //     let box = score.splice(0,m);
    //     result += box[box.length-1]*m
    // }
    for (let i=m; i<=score.length; i += m){
        result += score[i-1]*m
    }
    return result;
}