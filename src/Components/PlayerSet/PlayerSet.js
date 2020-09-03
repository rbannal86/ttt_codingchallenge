import React, { useState } from "react";

export default function PlayerSet(props) {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  return (
    <form
      className={"player_form"}
      onSubmit={() => {
        props.handlePlayerSet(playerOne, playerTwo);
      }}
    >
      <h3>The Starting Player Will Be Randomized Before Each Game</h3>
      <label>Enter Player One's Name: </label>
      <input
        type={"text"}
        value={playerOne}
        onChange={(e) => {
          setPlayerOne(e.target.value);
        }}
        required
      />
      <label>Enter Player Two's Name: </label>
      <input
        type={"text"}
        value={playerTwo}
        onChange={(e) => {
          setPlayerTwo(e.target.value);
        }}
        required
      />
      <button type={"submit"}>Start Game</button>
    </form>
  );
}
