function solution(array) {
    var answer = [0,0];
    for (let i=0; i<array.length; i++){
        if (array[i]>answer[0]) {
            answer = [array[i], i]
        }
    }
    return answer;
}