function solution(x) {
    let sum = String(x).split('').reduce((acc,cur)=>acc = +acc + +cur);
    if (x%sum===0){
        return true;
    } else {
        return false;
    }
}