function solution(s) {
    if (s.length === 4 || s.length === 6) {
      if (isNaN(s) || s.includes('e')){
          return false;
      } else {
          return true;
      }
    } else {
      return false;
    }
}