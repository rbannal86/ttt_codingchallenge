import React, { useState } from "react";
import Tile from "../Tile/Tile";
import "./Board.css";

export default function Board() {
  const [board, setBoard] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);
  const [player, setPlayer] = useState(["Player One"]);
  const [playerMark, setPlayerMark] = useState("X");
  const [selected, setSelected] = useState(null);

  const renderRow = (row, rowIndex) => {
    return row.map((tile, index) => {
      return (
        <Tile
          key={index}
          status={tile}
          handleClick={setSelected}
          row={index}
          column={rowIndex}
        />
      );
    });
  };

  const renderBoard = () => {
    return board.map((row, index) => {
      return (
        <div className={"game_board_row"} key={index}>
          {renderRow(row, index)}
        </div>
      );
    });
  };

  return (
    <div>
      <div className={"game_board_main"}>{renderBoard()}</div>
      <div className={"game_board_button_bar"}>
        <button>Confirm Move</button>
        <button>Cancel Move</button>
      </div>
    </div>
  );
}
