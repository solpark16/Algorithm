function solution(s) {
    let num = Math.floor(s.length/2);
    let result = '';
    if (s.length % 2 === 0){
        return result += (s[num-1]+s[num]);
    } else {
        return result += s[num];
    }
}