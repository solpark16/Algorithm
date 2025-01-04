function solution(spell, dic) {
    spell.forEach((el)=>{
        dic = dic.filter((v)=>v.includes(el))
    })
    return dic.length ? 1 : 2
}