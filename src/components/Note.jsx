import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <button onClick={() => props.onDelete(props.id)}>X</button>
    </div>
  );
}

export default Note;
