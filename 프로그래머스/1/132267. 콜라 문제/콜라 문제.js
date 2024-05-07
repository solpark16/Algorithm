function solution(a, b, n) {
    let cokeAll = 0;
    while (n >= a){
        let cokeNum = Math.floor(n/a);
        n = n - (cokeNum*a) + cokeNum*b;
        cokeAll += cokeNum*b;
    }
    return cokeAll;
    
}