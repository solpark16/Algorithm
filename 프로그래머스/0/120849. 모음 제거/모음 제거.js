function solution(my_string) {
    var vowers = ['a','e','i','o','u'];
    return [...my_string].filter((item)=>{
        for (let i=0;i<vowers.length;i++){
            if (item.includes(vowers[i])){
                return false;
            }
        }
        return true;
    }).join("");
}