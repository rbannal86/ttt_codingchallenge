import React from "react";
import "./Tile.css";

export default function Tile(props) {
  return (
    <div
      className={"tile_body"}
      onClick={() => props.handleClick([props.row, props.column])}
    >
      {props.tile}
    </div>
  );
}
