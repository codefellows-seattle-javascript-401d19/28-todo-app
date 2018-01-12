import React from 'react';
import Modal from '../modal';
import NoteForm from '../note-form';

class NoteItem extends React.Component {
  render () {
    let {note, handleRemoveNote, handleUpdateNote} = this.props;

    let showModal = () => handleUpdateNote({...note, editing: true});
    let hideModal = () => handleUpdateNote({...note, editing: false});

    let updateAndClose = (note) => {
      handleUpdateNote({...note, editing: false});
    };

    return (
      <div className ="note">
        <li key={note.index}>
          {note.title}: {note.content}. Written on {note.createdOn}
          <button
            onClick={handleRemoveNote.bind(null, this.props.note)}>
            Remove Note
          </button>
          <button onClick={showModal}> Edit Note </button>
        </li>
        <Modal handleClose={hideModal} show={note.editing}>
          <h1>This is my modal and it has an h1 </h1>
          <NoteForm handleComplete={updateAndClose} note={note} />
        </Modal>
      </div>
    );
  }
}

export default NoteItem;
