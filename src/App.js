import React, { useState } from "react";
import PlayerSet from "./Components/PlayerSet/PlayerSet";
import Board from "./Components/Board/Board";

import "./App.css";

function App() {
  const [playerOne, setPlayerOne] = useState();
  const [playerTwo, setPlayerTwo] = useState();

  const handlePlayerSet = (playerOne, playerTwo) => {
    setPlayerOne(playerOne);
    setPlayerTwo(playerTwo);
  };

  const handlePlayerReset = () => {
    setPlayerOne();
    setPlayerTwo();
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
      </header>
      {!playerOne ? (
        <PlayerSet handlePlayerSet={handlePlayerSet} />
      ) : (
        <Board
          players={[playerOne, playerTwo]}
          handlePlayerReset={handlePlayerReset}
        />
      )}
    </div>
  );
}

export default App;
