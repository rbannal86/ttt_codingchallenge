import React from "react";

export default function Scoreboard(props) {
  return (
    <div className={"scoreboard"}>
      <div>Ties: {props.scores.Ties}</div>
      <div>
        {props.players[0]}: {props.scores[props.players[0]]}
      </div>
      <div>
        {props.players[1]}: {props.scores[props.players[1]]}
      </div>
    </div>
  );
}
