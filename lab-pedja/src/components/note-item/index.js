import React from "react";

import NoteForm from "../note-form";
// import Modal from "../modal";

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {note, handleRemoveNote} = this.props;


    return (
      <div className="note-item">
        <strong>{note.title}</strong>: {note.content}
        <button type='click' onClick={handleRemoveNote.bind(null, note)}>Remove</button>
      </div>
    )
  }
}

export default NoteItem;
