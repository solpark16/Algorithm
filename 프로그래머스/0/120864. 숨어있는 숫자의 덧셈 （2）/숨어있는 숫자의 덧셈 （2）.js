function solution(my_string) {
    let arr = my_string.match(/\d+/g);
    let result = 0;
    if (arr != null){
        for (let i=0; i<arr.length; i++){
            result += +arr[i];
        }
    }
    return result;
}