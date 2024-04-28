function solution(arr) {
    let result = arr.filter((item)=>item!==Math.min(...arr));
    if (result.length===0) return [-1];
    return result;
}