function solution(s) {
    let arr = s.split(" ");
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let el = "";
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 === 0) {
                el += arr[i][j].toUpperCase();
            } else {
                el += arr[i][j].toLowerCase();
            }
        }
        result.push(el);
    }
    return result.join(" ");
}