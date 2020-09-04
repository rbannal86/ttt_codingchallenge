import React, { useState, useEffect } from "react";
import Tile from "../Tile/Tile";
import CheckBoard from "../../Services/CheckBoard";
import Scoreboard from "../Scoreboard/Scoreboard";
import "./Board.css";

export default function Board(props) {
  const [board, setBoard] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);
  const [player, setPlayer] = useState(null);
  const [playerMark, setPlayerMark] = useState("X");
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [moves, setMoves] = useState(0);
  const [gameover, setGameover] = useState(false);
  const [scores, setScores] = useState(null);

  const coinFlip = () => {
    let starting = Math.round(Math.random() * 1);
    setPlayer(props.players[starting]);
  };

  if (!scores) {
    let scoreObject = {};
    scoreObject[props.players[0]] = 0;
    scoreObject[props.players[1]] = 0;
    scoreObject.Ties = 0;
    setScores(scoreObject);
  }
  if (!player) coinFlip();

  useEffect(() => {
    if (moves === 9) {
      setScores({ ...scores, Ties: scores.Ties + 1 });
      setFeedback("Cat's Game!");
      setGameover(true);
      setMoves(0);
    }
  }, [moves, scores]);

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
          selected={selected}
        />
      );
    });
  };

  const handleMove = () => {
    if (selected) {
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
        let newScores = scores;
        newScores[player] = newScores[player] + 1;
        setScores(newScores);
        setFeedback(player + " has won!");
        setGameover(true);
      } else {
        let nextPlayer = props.players.filter((person) => person !== player);
        if (playerMark === "O") setPlayerMark("X");
        else setPlayerMark("O");
        setPlayer(nextPlayer[0]);
        setSelected(null);
        setMoves(moves + 1);
      }
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
    setPlayer(null);
    setPlayerMark("X");
    setSelected(null);
    setFeedback(null);
    setMoves(0);
    setGameover(false);
  };

  return (
    <div>
      <Scoreboard scores={scores} players={props.players} />
      {feedback && feedback !== "This Tile Has Already Been Chosen!" ? (
        <></>
      ) : (
        <h3 className={"game_board_player"}>{player}'s Turn</h3>
      )}
      <div className={"game_board_feedback"}>{feedback}</div>
      <div className={"game_board_main"}>{renderBoard()}</div>
      <div className={"game_board_button_bar"}>
        {gameover ? (
          <>
            <button onClick={() => handleReset()}>New Game</button>
            <button onClick={() => props.handlePlayerReset()}>
              New Players
            </button>
          </>
        ) : (
          <>
            <button onClick={() => handleMove()}>Confirm Move</button>
            <button onClick={() => handleCancel()}>Cancel Move</button>
            <button onClick={() => handleReset()}>Restart</button>
            <button onClick={() => props.handlePlayerReset()}>
              New Players
            </button>
          </>
        )}
      </div>
    </div>
  );
}
