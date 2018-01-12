import React from 'react';
import NoteForm from '../note-form';
import Modal from '../modal';

class NoteItem extends React.Component {
  render() {
    let {note, handleRemoveNote, handleUpdateNote} = this.props;

    let showModal = () => handleUpdateNote({...note, editing : true});
    let hideModal = () => handleUpdateNote({...note, editing : false});

    let updateClose = (note) => {
      handleUpdateNote({...note, edting : false});
    };

    return(
      <div className='note-item'>
        <strong>{note.title}</strong> : {note.content}
        <button onClick={handleRemoveNote.bind(null, note)}>Remove This Note</button>
        <button onClick={showModal}>Update This Note</button>
        <Modal handleModalClose={hideModal} show={note.editing}>
          <h2>Updating {note.title}</h2>
          <NoteForm
            handleNote={updateClose}         
            // handleUpdateNote={handleUpdateNote}         
            // handleRemoveNote={handleRemoveNote}         
            // handleComplete={updateClose}
            note={note}
          />
        </Modal>
      </div>
    );
  } 
}

export default NoteItem;