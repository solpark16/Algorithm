function solution(X, Y) {
    let arrX = [...X]
    let arrY = [...Y]
    let result = "";
    for (let i = 0; i< 10; i++){
        let lengthX = arrX.filter((num)=>Number(num)===i).length;
        let lengthY = arrY.filter((num)=>Number(num)===i).length;
        if (lengthX > 0 || lengthX > 0 ){
            result += String(i).repeat(Math.min(lengthX,lengthY));
        }
    }
    
    if (result.length === 0){
        return "-1";
    } else if (result.replaceAll("0","")===""){
        return "0";
    } else {
        return result.split("").sort((a,b)=>b-a).join("");
    }
}