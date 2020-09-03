import React, { useState } from "react";
import Tile from "../Tile/Tile";
import CheckBoard from "../../Services/CheckBoard";
import "./Board.css";

export default function Board() {
  const [board, setBoard] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);
  const [player, setPlayer] = useState("Player One");
  const [playerMark, setPlayerMark] = useState("X");
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [moves, setMoves] = useState(0);
  const [gameover, setGameover] = useState(false);

  if (moves === 9 && !feedback) {
    setFeedback("Cat's Game!");
    setGameover(true);
  }

  const handleClick = (tile) => {
    setFeedback(null);
    if (board[tile[1]][tile[0]] !== " ")
      setFeedback("This Tile Has Already Been Chosen!");
    else if (!selected) setSelected(tile);
  };

  const renderBoard = () => {
    return board.map((row, index) => {
      return (
        <div className={"game_board_row"} key={index}>
          {renderColumn(row, index)}
        </div>
      );
    });
  };

  const renderColumn = (row, colIndex) => {
    return row.map((tile, index) => {
      return (
        <Tile
          key={index}
          status={tile}
          handleClick={handleClick}
          row={index}
          column={colIndex}
        />
      );
    });
  };

  const handleMove = () => {
    let newBoard = board;
    let column = selected[0];
    let row = selected[1];
    newBoard[row][column] = playerMark;
    setBoard(newBoard);

    if (
      CheckBoard.checkColumn(board) ||
      CheckBoard.checkRows(board) ||
      CheckBoard.checkDiagonals(board)
    ) {
      console.log(player);
      setFeedback(player + " has won!");
      setGameover(true);
    } else {
      if (player === "Player One") {
        setPlayer("Player Two");
        setPlayerMark("O");
      } else {
        setPlayer("Player One");
        setPlayerMark("X");
      }
      setSelected(null);
      setMoves(moves + 1);
    }
  };

  const handleCancel = () => {
    setSelected(null);
  };

  const handleReset = () => {
    setBoard([
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ]);
    setPlayer("Player One");
    setPlayerMark("X");
    setSelected(null);
    setFeedback(null);
    setMoves(0);
    setGameover(false);
  };

  return (
    <div>
      <h3>{player}'s Turn</h3>
      <div>{feedback}</div>
      <div className={"game_board_main"}>{renderBoard()}</div>
      <div className={"game_board_button_bar"}>
        {gameover ? (
          <button onClick={() => handleReset()}>New Game</button>
        ) : (
          <>
            <button onClick={() => handleMove()}>Confirm Move</button>
            <button onClick={() => handleCancel()}>Cancel Move</button>
            <button onClick={() => handleReset()}>Restart</button>
          </>
        )}
      </div>
    </div>
  );
}
