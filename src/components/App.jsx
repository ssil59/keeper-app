import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArr, setNoteArr] = useState([]);

  function addNote(noteItem) {
    setNoteArr((prevArr) => {
      return [...prevArr, noteItem];
    });
  }

  function deleteNote(id) {
    setNoteArr((prevArr) =>
      prevArr.filter((note, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea handleSubmit={addNote} />
      {noteArr.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          body={item.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
