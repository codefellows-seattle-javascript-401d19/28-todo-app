import React from 'react';
import Modal from '../modal';
import NoteForm from '../note-form';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let {note, handleRemoveNote, handleUpdateNote} = this.props;

    let showModal = () => handleUpdateNote({...note, editing:true});
    let hideModal = () => handleUpdateNote({...note, editing:false});

    let updateAndClose = (note) => {
      handleUpdateNote({...note, editing:false});
    };
    return(
      <div className='note'>
        <div className='note-item' onDoubleClick={showModal}>
          <div className="noteTitle"><strong>{note.title}</strong>:</div>
          <div className="noteContent"> {note.content}</div>
          <p>
            <div className="buttons">
              <button onClick={handleRemoveNote.bind(null, note)}> Remove </button>
              <button onClick={showModal}> Edit </button>
            </div>
          </p>
        </div>
        <Modal handleClose={hideModal} show={note.editing}>
          <h1>Editing {note.title}</h1>
          <NoteForm handleComplete={updateAndClose} note={note} />
        </Modal>
      </div>
    );
  }
}

export default NoteItem;
