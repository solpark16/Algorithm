function solution(myString) {
    return [...myString].map((string)=>{
        return string.toUpperCase()
    }).join("")
}