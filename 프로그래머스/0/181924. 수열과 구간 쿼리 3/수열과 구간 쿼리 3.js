function solution(arr, queries) {
    for (let i=0; i<queries.length; i++){
        [a,b]=queries[i]
        const elA = arr[a]
        const elB = arr[b]
        arr[a]=elB
        arr[b]=elA
    }
    return arr;
}