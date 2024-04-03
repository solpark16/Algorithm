function solution(order) {
    return [...order.toString()].filter(item => item % 3 == 0 && item != 0).length;
}