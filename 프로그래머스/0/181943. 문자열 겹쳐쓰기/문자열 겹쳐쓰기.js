function solution(my_string, overwrite_string, s) {
    const result = my_string.split('')
    for (let i=0; i<overwrite_string.length; i++){
        result[i+s]=overwrite_string[i]
    }
    return result.join('')
}