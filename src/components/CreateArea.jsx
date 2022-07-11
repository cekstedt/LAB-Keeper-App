import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isVisible, setIsVisible] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleFocus(focus) {
    setIsVisible(focus);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          style={{ display: isVisible ? "inherit" : "none" }}
        />
        <textarea
          name="content"
          onChange={handleChange}
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
          value={note.content}
          placeholder="Take a note..."
          rows={isVisible ? "3" : "1"}
        />
        <Zoom in={isVisible}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
