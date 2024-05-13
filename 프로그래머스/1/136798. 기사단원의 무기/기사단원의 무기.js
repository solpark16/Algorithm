function solution(number, limit, power) {
    let arr = [];
    for (let i=1; i<=number; i++){
        let num = 0;
        for (let j=1; j<=Math.sqrt(i); j++){
            if (i%j===0){
                if (i/j== j){
                  num++;
                } else {
                  num = num +2;
                }
            }
        }
        if (num > limit){
            arr.push(power);
        } else {
            arr.push(num);
        }
    }
    let result = arr.reduce((acc,cur)=>acc+cur);
    return result;
}