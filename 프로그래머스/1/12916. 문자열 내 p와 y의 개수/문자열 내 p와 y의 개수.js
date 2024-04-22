function solution(s){
    let pLength = 0;
    let yLength = 0;
    for (let i=0; i<s.length; i++){
        if (s[i].toLowerCase() === 'p') {
            pLength++;
        } else if (s[i].toLowerCase() === 'y') {
            yLength++;
        }
    }
    return pLength === yLength;
}