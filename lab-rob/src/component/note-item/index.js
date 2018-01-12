import React from 'react';
import Modal from '../modal';
import NoteForm from '../note-form';

class NoteItem extends React.Component {
  render() {
    let {note, updateNote, removeNote} = this.props;

    let showModal = () => updateNote({...note, editing: true});
    let hideModal = () => updateNote({...note, editing: false});
    
    let updateAndCloseModal = note => updateNote({...note, editing: false});

    return (
      <div className='note-item'>
        <strong>{note.title}</strong>: <span onDoubleClick={showModal}>{note.content}</span>
        <button onClick={removeNote.bind(null, note)}>Remove</button>
        <Modal handleClose={hideModal} show={note.editing}>
          <h1>Editing {note.title}:</h1>
          <NoteForm handleComplete={updateAndCloseModal} note={note} />
        </Modal>
      </div>
    );
  }
}

export default NoteItem;