function solution(board, moves) {
  const basket = [];
  let result = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const space = board[j][moves[i] - 1];
      if (space !== 0) {
        basket.push(space);
        board[j][moves[i] - 1] = 0;
        if (basket[basket.length - 1] === basket[basket.length - 2]) {
          basket.length = basket.length - 2;
          result += 2;
        }
        break;
      }
    }
  }
  return result;
}