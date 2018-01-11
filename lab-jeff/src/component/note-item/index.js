import React from 'react';
import NoteForm from '../note-form';
import Modal from '../modal';

class NoteItem extends React.Component {
  render() {
    let { note, handleRemoveNote, handleUpdateNote } = this.props;

    let showModal = () => handleUpdateNote({ ...note, editing: true });
    let hideModal = () => handleUpdateNote({ ...note, editing: false });

    let updateAndClose = note => {
      handleUpdateNote({ ...note, editing: false });
    };
    return (
      <div>
        <li className="note-item" onDoubleClick={showModal}>
          {note.title}: {note.content}
        </li>
        <button
          type="click"
          onClick={() => {
            handleRemoveNote(note);
          }}
        >
					Delete
        </button>
        <button onClick={showModal}> Edit</button>
        <Modal handleClose={hideModal} show={note.editing}>
          <h1>Editing {note.title}</h1>
          <NoteForm handleComplete={updateAndClose} note={note} />
        </Modal>
      </div>
    );
  }
}

export default NoteItem;
