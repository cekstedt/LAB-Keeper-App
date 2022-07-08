import React from "react";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const funcMap = { title: setTitle, content: setContent };

  function handleChange(event) {
    const { value, name } = event.target;
    funcMap[name](value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.addNote({ title: title, content: content });
            setTitle("");
            setContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
