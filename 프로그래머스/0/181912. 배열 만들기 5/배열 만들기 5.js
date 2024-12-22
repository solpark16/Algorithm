function solution(intStrs, k, s, l) {
    return intStrs.map((el)=>Number(el.substr(s,l))).filter((el)=>el>k)
}