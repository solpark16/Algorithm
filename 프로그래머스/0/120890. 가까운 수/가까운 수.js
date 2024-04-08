function solution(array, n) {
    array.sort((a,b)=>a-b);
    let newArr = [];
    for (let i=0; i<array.length; i++){
        newArr.push(Math.abs(array[i]-n));
    }
    let minNum = Math.min(...newArr);
    let minIndex = newArr.indexOf(minNum);
    return array[minIndex];
}