    function solution(s, n) {
      let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let lower = "abcdefghijklmnopqrstuvwxyz";
      let result = '';
      for (let i = 0; i < s.length; i++) {
        let el = s[i];
        if (el === " ") {
          result += el;
          continue;
        }
        let elArr = upper.includes(el) ? upper : lower;
        let elNext = elArr.indexOf(el) + n
        if (elNext >= elArr.length) {
          elNext -= elArr.length;
        }
        result += elArr[elNext];
      }
      return result;
    }