function solution(hp) {
    var result = 0;
    while (hp >= 1) {
        if (hp >= 5) {
            hp -= 5;
            result += 1;
        } else if (hp >= 3) {
            hp -= 3;
            result += 1;
        } else if (hp >= 1) {
            hp -= 1;
            result += 1;
        }
    }
    return result;
}