import React from 'react';
import NoteForm from '../note-form';
import Modal from '../../Modal';

class NoteItem extends React.Component {
  render() {
    let {note, updateNote} = this.props;

    let showModal = () => updateNote({...note, editing: true});      
    let hideModal = () => updateNote({...note, editing: false});      

    let updateAndHide = (note) => {
      updateNote({...note, editing: false});      
    };

    let header = note.title.trim() ? `'${note.title}'` : `'un-named note'`;
    return(
      <ul className='note-item' onDoubleClick={showModal}>
        <li>Title: {note.title}</li>
        <li>Content: {note.content}</li>
        <Modal handleClose={hideModal} setVisibility={note.editing}> 
          <h1>Editing {header}</h1>
          <NoteForm note={note} handleNote={updateAndHide} />
        </Modal>
      </ul>
    );
  }
}

export default NoteItem;