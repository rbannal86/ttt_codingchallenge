import React from "react";
import Board from "./Components/Board/Board";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
      </header>
      <Board />
    </div>
  );
}

export default App;
