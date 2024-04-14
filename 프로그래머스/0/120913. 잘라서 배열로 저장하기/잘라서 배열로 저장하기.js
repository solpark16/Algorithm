function solution(my_str, n) {
    let answer = [];
    let arr = [...my_str];
    while (arr.length){
        answer.push(arr.splice(0,n).join(''));
    }
    return answer;
}