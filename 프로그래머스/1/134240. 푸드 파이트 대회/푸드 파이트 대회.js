function solution(food) {
    let arr = [];
    food.forEach((item,idx)=>{
        if (idx === 0){
            return;
        } else {
            for (let i = 0; i<Math.floor(item/2); i++){
                arr.push(idx);
            }
        }
    })
    return [...arr,0,...arr.reverse()].join("")
}