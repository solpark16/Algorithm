function solution(str1, str2) {
    return [...str1].map((el,idx)=>str1[idx]+str2[idx]).join("");
}