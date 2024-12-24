function solution(myStr) {
    const result = myStr.split('a').map((el)=>el.split('b').join(" ")).map((el)=>el.split('c').join(" ")).join(" ").split(" ").filter((el)=>el)
    return result.length ? result : ["EMPTY"]
}