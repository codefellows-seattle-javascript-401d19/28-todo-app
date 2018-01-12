import React from 'react';
import NoteForm from '../note-form';
import Modal from '../modal';

class NoteItem extends React.Component {
  render(){
    const {note, updateNote, deleteNote} = this.props;

    const showModal = () => updateNote({...note, editing: true});
    const hideModal = () => updateNote({...note, editing: false});

    const updateAndClose = (note) => {
      updateNote({ ...note, editing: false });
    };

    return(
      <li className='note-item' onDoubleClick={showModal}>
        <h4>{this.props.note.title}</h4>
        <p>{this.props.note.content}</p>
        <button 
          onClick={showModal}>Update
        </button>
        <button 
          className='delete-button' 
          onClick={deleteNote.bind(this, note.id)}>Delete
        </button>
        <Modal closeEditingForm={hideModal} show={note.editing}>
          <h1>Editing {note.title}</h1>
          <NoteForm completeNote={updateAndClose} note={note} />
        </Modal>
      </li>
    );
  }
}

export default NoteItem;