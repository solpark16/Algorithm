function solution(n) {
    let result = 1;
    let i = 1;
    let num = 0;
    while (result*i <= n){
        result *= i;
        num++;
        i++;
    }
    return num;
}