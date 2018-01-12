import React from 'react';
import Modal from '../modal';
import NoteForm from '../noteform';

class NoteItem extends React.Component {
  render() {
    let note = this.props.notes[this.props.index];
    let {removeNote, updateNote} = this.props;
    let showEditView = () => updateNote({...note, editing: 'true'});
    let hideEditView = () => updateNote({...note, editing: 'false'});
    let handleComplete = (note) => {
      updateNote({...note, editing: 'false'});
    };

    return(
      <div onDoubleClick={showEditView} className='div'>
        <p>title: {note.title}</p>
        <p>note: {note.content}</p>
        <button id={note.id}
          onClick={removeNote.bind(null, note)}>
          Remove Note
        </button>
        <Modal hideExit={hideEditView} visible={note.editing}>
          <NoteForm notes={note} handleComplete={handleComplete}/>
        </Modal>
      </div>
    );
  }
}

export default NoteItem;
