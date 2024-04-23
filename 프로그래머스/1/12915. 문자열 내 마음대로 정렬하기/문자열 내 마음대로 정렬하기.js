function solution(strings, n) {
    let arr = strings.map((item)=>item=item[n]+item).sort();
    let result = arr.map((item)=>{
        let itemArr = [...item];
        itemArr.shift();
        return itemArr.join('');
    })
    return result;
}