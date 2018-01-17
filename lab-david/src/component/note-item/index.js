import React from 'react';
import Modal from '../modal';
import NoteForm from '../note-form';

class NoteItem extends React.Component{

  //-----------------------------------------
  // Hooks
  //-----------------------------------------

  render(){

    let { note } = this.props;
    let { id, title, content } = this.props.note;
    let { handleRemoveNote, handleUpdateNote } = this.props;

    let showModal = () => handleUpdateNote({...note, editing:true });
    let hideModal = () => handleUpdateNote({...note, editing:false });
    
    let updateAndClose=(note) => {
      handleUpdateNote({...note, editing:false});
    };


    return(
      <div className='note-item'>
        <h2>Note title : {title}</h2>
        <p>Note content : {content}</p>
        <button type="click" onClick={ this.props.handleRemoveNote.bind(null, this.props.note)
        }> Delete
        </button>
        <button onClick={showModal}> Edit </button>
        <Modal handleClose={hideModal} show={note.editing}>
          <h1>Editing {note.title}</h1>
          <NoteForm handleComplete={updateAndClose} note={note} />
        </Modal>
        
      </div>
    );
  }


}

export default NoteItem;