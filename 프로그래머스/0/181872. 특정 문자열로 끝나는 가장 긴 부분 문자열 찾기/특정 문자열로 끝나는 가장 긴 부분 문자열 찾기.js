function solution(myString, pat) {
    let result = ""
    for (let i=0; i<=myString.length-pat.length; i++){
        if (myString.slice(i,i+pat.length)===pat){
            result = myString.slice(0,i+pat.length)
        }
    }
    return result;
}