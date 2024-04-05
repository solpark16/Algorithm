function solution(i, j, k) {
    let result = 0;
    for(i;i<=j;i++){
        result += [...i.toString()].filter((element)=>element==k.toString()).length;
    }
    return result;
}