import './note-item.scss';

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
        <strong><span className='item-number'>{this.props.itemNumber}.</span> {note.title} &mdash; </strong>
        <button className='remove-note' onClick={removeNote.bind(null, note)}>x</button> 
        <div className='content' onDoubleClick={showModal}>{note.content}</div>
        
        <Modal handleClose={hideModal} show={note.editing}>
          <button className='close-modal' onClick={hideModal}>x</button>
          <h1>Editing {note.title}:</h1>
          <NoteForm handleComplete={updateAndCloseModal} note={note} />
        </Modal>
      </div>
    );
  }
}

export default NoteItem;