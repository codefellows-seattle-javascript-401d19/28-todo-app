import React from 'react';
import Modal from '../modal';
import NoteForm from '../noteform';

class NoteItem extends React.Component {
  render() {
    let {note, removeNote, updateNote} = this.props;
    console.log(note, `note in NoteItem`);
    let showEditView = () => updateNote({...note, editing: true});
    let hideEditView = () => updateNote({...note, editing: false});
    let handleComplete = (note) => {
      updateNote({...note, editing: false});
    };

    return(
      <li onDoubleClick={showEditView} className='li'>
        <p>title: {note.title}</p>
        <p>note: {note.content}</p>
        <button id={note.id}
          onClick={removeNote.bind(null, note)}>
          Remove Note
        </button>
        <Modal hideExit={hideEditView} visible={note.editing}>
          <NoteForm note={note} handleComplete={handleComplete}/>
        </Modal>
      </li>
    );
  }
}

export default NoteItem;
