function solution(my_string) {
    const arr = my_string.split(' ')
    let result = +arr[0]
    for (let i=1; i<arr.length; i++){
        if (+arr[i]){
            if (arr[i-1]==='+'){
                result += +arr[i]
            } else {
                result -= +arr[i]
            }
        }
    }
    return result
}