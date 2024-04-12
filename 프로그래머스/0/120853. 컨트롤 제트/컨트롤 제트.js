function solution(s) {
    let arr = s.split(' ');
    let result = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]==='Z'){
            result -= +arr[i-1];
        } else {
            result += +arr[i];
        }
    }
    return result;
}