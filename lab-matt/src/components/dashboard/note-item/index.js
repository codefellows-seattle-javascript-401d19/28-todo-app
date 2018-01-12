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

    let title = note.title.trim() ? note.title : 'un-named';
    let content = note.content.trim() ? note.content.trim() : 'Content:';
    return(
      <ul className='note-item' onDoubleClick={showModal}>
        <li>{title}</li>
        <li>{content}</li>
        <Modal handleClose={hideModal} setVisibility={note.editing}> 
          <h1>Editing {`'${title} note'`}</h1>
          <NoteForm note={note} handleNote={updateAndHide} />
        </Modal>
      </ul>
    );
  }
}

export default NoteItem;