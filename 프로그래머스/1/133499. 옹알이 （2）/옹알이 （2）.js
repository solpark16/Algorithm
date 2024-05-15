function solution(babbling) {
    let newBabbling = [...babbling];
    let arr = ["aya", "ye", "woo", "ma"]
    for (let i=0; i<babbling.length; i++){
        for (let j=0; j<arr.length; j++){
            if (babbling[i].includes(arr[j]+arr[j])){
                continue;
            } else if (babbling[i].includes(arr[j])){
                newBabbling[i] = newBabbling[i].replaceAll(arr[j], " ");
            }
        }
        newBabbling[i] = newBabbling[i].replaceAll(" ","")
    }
    return newBabbling.filter((item)=>item==="").length;
}