function solution(myString, pat) {
    function patCheck(i){
        for (let j=0; j<pat.length; j++){
            if (myString[i+j] !== pat[j]){
                return false;
            }
        }
        return true;
    }
    let result = 0;
    for (let i=0; i<myString.length - pat.length + 1; i++){
        if (myString[i]!==pat[0]) {
            continue;
        }
        if (patCheck(i)){
            result++;
        }
    }
    return result;
}