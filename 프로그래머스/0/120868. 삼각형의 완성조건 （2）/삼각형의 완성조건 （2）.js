function solution(sides) {
    result = []
    sides.sort((a,b)=>a-b)
    console.log(sides)
    for (let i=sides[1]-sides[0]+1; i<=sides[1]; i++){
        result.push(i)
    }
    for (let i=sides[1]+1; i<sides[0]+sides[1]; i++){
        result.push(i)
    }
    return result.length
}