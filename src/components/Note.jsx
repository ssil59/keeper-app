import React from "react";
//import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteForever from "@mui/icons-material/DeleteForever";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <button onClick={() => props.onDelete(props.id)}>
        <DeleteForever />
      </button>
    </div>
  );
}

export default Note;
