function solution(strArr) {
    strArr.sort((a,b)=>a.length-b.length)
    console.log(strArr)
    let result = 0
    for (let i=strArr[0].length; i<=strArr[strArr.length-1].length; i++){
        const list = (strArr.filter((el)=>el.length===i)).length
        if (list > result){
            result = list
        }
    }
    return result
}