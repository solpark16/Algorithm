function solution(n, m, section) {
    let arr = [];
    let count = 0;
    for (let i=1; i<=n; i++){
        arr.push(i);
    }
    for (let i=0; i<section.length; i++){
        if (arr.includes(section[i])){
            arr.splice(arr.indexOf(section[i]), m);
            count++;
        }
    }
    return count;
}