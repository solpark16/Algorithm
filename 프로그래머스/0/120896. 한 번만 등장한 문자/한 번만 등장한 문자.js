function solution(s) {
    let arr = [...s].sort();
    let obj = {};
    let result = '';
    arr.forEach((i)=>{
        if (obj[i]) {
            obj[i] += 1;
        } else {
            obj[i] = 1;
        }
    })
    for (const key in obj){
        if (obj[key]==1){
            result += key;
        }
    }
    return result;
}