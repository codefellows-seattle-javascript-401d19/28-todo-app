import React from 'react';
import Modal from '../modal';
import NoteForm from '../note-form';

class NoteItem extends React.Component {

  //...............................................................
  /* Hooks - these React will call for you */
  //...............................................................
  render() {
    let { note, handleRemoveNote, handleUpdateNote } = this.props;

    let showModal = () => handleUpdateNote({ ...note, editing: true });
    let hideModal = () => handleUpdateNote({ ...note, editing: false });

    let updateAndClose = (note) => {
      handleUpdateNote({ ...note, editing: false });
    };

    return (
      <div className='single-item'>
        {note.title}: {note.content}
        <button onClick={() => handleRemoveNote(note)}>Delete</button>
        <button onClick={showModal}>Edit</button>

        <Modal handleClose={hideModal} show={note.editing}>
          <h1>Editing {note.title}</h1>
          <NoteForm handleComplete={updateAndClose} note={note} />
        </Modal>
      </div>
    );
  } 
}

export default NoteItem;