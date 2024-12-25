function solution(x1, x2, x3, x4) {
    let a = false;
    let b = false;
    if(x1||x2){
        a = true;
    }
    if(x3||x4){
        b = true;
    }
    return a && b ? true : false
}