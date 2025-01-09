function solution(arr) {
    let x = 1;

    function repeat(arr, x) {
        // 새로운 배열을 만듭니다.
        let resultArr = arr.map((el) => {
            if (el >= 50 && el % 2 === 0) {
                return el / 2;
            } else if (el < 50 && el % 2 === 1) {
                return el * 2 + 1;
            }
            return el;
        });

        // 배열의 내용을 비교합니다.
        const isSame = arr.every((value, index) => value === resultArr[index]);

        if (!isSame) {
            // 재귀 호출의 결과를 반환합니다.
            return repeat(resultArr, x + 1);
        } else {
            return x-1;
        }
    }

    return repeat(arr, x);
}
