function solution(s) {
    let arr = [];
    return [...s].map((item)=>{
        if (arr.includes(item)){
            let el = arr.length - arr.lastIndexOf(item);
            arr.push(item);
            return el;
        } else {
            arr.push(item);
            return -1;
        }
    })
}