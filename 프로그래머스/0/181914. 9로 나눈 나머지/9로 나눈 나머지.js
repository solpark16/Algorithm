function solution(number) {
    return [...number].reduce((a, c) => +a + +c) % 9;
}