import React, { useState } from "react";
import "./Tile.css";

export default function Tile(props) {
  const [isSelected, setIsSelected] = useState(null);

  if (!props.selected && isSelected) {
    setIsSelected(null);
  }

  if (
    props.selected &&
    props.selected[0] === props.row &&
    props.selected[1] === props.column &&
    !isSelected
  ) {
    setIsSelected("true");
  }
  return (
    <div
      className={
        "tile_body " +
        isSelected +
        " row" +
        props.row +
        " column" +
        props.column
      }
      onClick={() => props.handleClick([props.row, props.column])}
    >
      <div className={"tile_mark"}>{props.status}</div>
    </div>
  );
}
