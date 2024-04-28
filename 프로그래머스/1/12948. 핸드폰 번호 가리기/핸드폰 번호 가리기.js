function solution(phone_number) {
    let result = '';
    for (let i=0; i<phone_number.length; i++){
        if (phone_number.length - i > 4){
            result += '*';
        } else {
            result += phone_number[i];
        }
    }
    return result;
}