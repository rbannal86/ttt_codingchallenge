import React, { useState } from "react";
import "./PlayerSet.css";

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
      <label className={"player_form_label"}>Enter Player One's Name: </label>
      <input
        className={"player_form_input"}
        type={"text"}
        value={playerOne}
        onChange={(e) => {
          setPlayerOne(e.target.value);
        }}
        required
      />
      <label className={"player_form_label"}>Enter Player Two's Name: </label>
      <input
        className={"player_form_input"}
        type={"text"}
        value={playerTwo}
        onChange={(e) => {
          setPlayerTwo(e.target.value);
        }}
        required
      />
      <button type={"submit"} className={"player_form_button"}>
        Start Game
      </button>
      <div className={"player_form_info"}>
        The Starting Player Will Be Randomized Before Each Game
      </div>
    </form>
  );
}
