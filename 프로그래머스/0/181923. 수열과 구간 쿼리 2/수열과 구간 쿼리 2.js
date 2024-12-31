function solution(arr, queries) {
    const result = [];
    for(let [s,e,k] of queries){
        const el = arr.filter((v,i)=>(i>=s && i<=e && v>k)).sort((a,b)=>a-b)[0]
        result.push(el ? el : -1)
    }

    return result;
}