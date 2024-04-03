function solution(n) {
    let num1 = 0;
    for(let i=0; i<=n; i++){
        let num2 = 0;
        for(let j=0; j<=i; j++){
            if (i%j==0){
                num2++;
            }
        }
        if (num2>=3){
            num1++;
        }
    }
    return num1;
}