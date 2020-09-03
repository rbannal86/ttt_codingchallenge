const CheckBoard = {
  checkColumn(board) {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2] &&
        board[i][0] !== " "
      ) {
        console.log("Winner!");
        return true;
      } else return false;
    }
  },
  checkRows(board) {
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i] &&
        board[0][i] !== " "
      ) {
        console.log("Winner!");
        return true;
      } else return false;
    }
  },
  checkDiagonals(board) {
    if (
      (board[0][0] === board[1][1] &&
        board[0][0] === board[2][2] &&
        board[0][0] !== " ") ||
      (board[0][2] === board[1][1] &&
        board[0][2] === board[2][0] &&
        board[0][2] !== " ")
    ) {
      console.log("Winner!");
      return true;
    } else return false;
  },
};

export default CheckBoard;
