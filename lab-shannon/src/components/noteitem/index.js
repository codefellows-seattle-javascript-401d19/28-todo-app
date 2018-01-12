import React from 'react';
import Modal from '../modal';
import NoteForm from '../noteform';

class NoteItem extends React.Component {
  render() {
    let note = this.props.notes[this.props.index];
    let {handleEditView, removeNote, updateNote} = this.props;
    let showEditView = () => handleEditView({...note, editing: 'true'});
    let hideEditView = () => handleEditView({...note, editing: 'false'});

    return(
      <div onDoubleClick={showEditView} className='div'>
        <p>title: {note.title}</p>
        <p>note: {note.content}</p>
        <button id={note.id}
          onClick={removeNote.bind(null, note)}>
          Remove Note
        </button>
        <Modal handleExit={hideEditView} visible={note.editing}>
          <NoteForm notes={this.props.notes}/>
        </Modal>
      </div>
    );
  }
}

export default NoteItem;
