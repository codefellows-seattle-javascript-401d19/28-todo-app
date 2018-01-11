import React from 'react';
import Modal from '../modal';
import NoteForm from '../noteform';

class NoteItem extends React.Component {
  render() {
    let {note, handleRemoveNote, handleUpdateNote} = this.props;

    let showModal = () => handleUpdateNote({...note, editing: true});
    let hideModal = () => handleUpdateNote({...note, editing: false});

    let updateAndClose = (note) => {
      handleUpdateNote({...note, editing: false});
    };

    return (
      <div>
        <li className ='note-item'>
          <p>Title: {note.title}</p>
          <p> Content: {note.content}</p>
        </li>
        <button className='delete-button' type="click" onClick={handleRemoveNote.bind(null, note)}>Delete</button>
        <button onClick={showModal}>Edit</button>
        <Modal handleClose={hideModal} show={note.editing}>
          <h1>Editing {note.title}</h1>
          <NoteForm handleComplete={updateAndClose} note={note}/>
        </Modal>
      </div>
    );
  }
}

export default NoteItem;