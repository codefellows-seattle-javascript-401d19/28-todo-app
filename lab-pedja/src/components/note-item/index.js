import React from "react";

import NoteForm from "../note-form";
import Modal from "../modal";

class NoteItem extends React.Component {
  render() {
    let {note, handleRemoveNote, handleUpdateNote} = this.props;

    let showModal = () => handleUpdateNote({...note, editing: true});
    let hideModal = () => handleUpdateNote({...note, editing: false});

    let updateAndClose = note => {
      handleUpdateNote({...note, editing: false});
    };

    return (
      <div className="note-item" onDoubleClick={showModal}> 
        <p><strong>{note.title}:</strong> {note.content}</p>
        <button onClick={handleRemoveNote.bind(null, note)}>Remove</button>
        <button onClick={showModal}>Edit</button>
        <Modal handleClose={hideModal} show={note.editing}>
          <h2>Editing {note.title} </h2>
          <NoteForm handleComplete={updateAndClose} note={note}/>
        </Modal>
      </div>
    );
  }
}

export default NoteItem;
