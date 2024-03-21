function solution(str1, str2) {
    for (let i=0;i<str1.length;i++){
        let sum = 0;
        for (let j=0;j<str2.length;j++){
            if (str1[i+j] == str2[j]){
                sum++;
                if (sum == str2.length) {
                    return 1;
                }
            } else {
                break;
            }
        }
    }
    return 2;
}