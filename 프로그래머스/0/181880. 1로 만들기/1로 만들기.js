function solution(num_list) {
    let result = 0;
    for (let i=0; i<num_list.length; i++){
        let el = num_list[i]
        while (el!==1){
            result++;
            if (el%2===0){
                el=el/2
            } else {
                el=(el-1)/2
            }
        }
    }
    return result;
}