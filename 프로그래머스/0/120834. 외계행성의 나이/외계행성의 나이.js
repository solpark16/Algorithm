function solution(age) {
    var answer = '';
    let alpha = [];
    let arr = Array.from(String(age));
    
    for (let i=97; i<=122; i++){
        alpha.push(String.fromCharCode(i));
    }
    
    for (let j=0; j<arr.length; j++){
        answer += alpha[arr[j]];
    }
    
    return answer;
}