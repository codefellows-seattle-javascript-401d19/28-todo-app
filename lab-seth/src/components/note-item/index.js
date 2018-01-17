import React from 'react';
import NoteForm from '../note-form';
import Modal from '../modal';

class NoteItem extends React.Component {
  render() {
    // let {note, handleRemoveNote, handleUpdateNote} = this.props;

    let showModal = () => this.props.handleUpdateNote({ ...this.props.note, editing : true});
    let hideModal = () => this.props.handleUpdateNote({ ...this.props.note, editing : false});

    let updateClose = (note) => {
      this.props.handleUpdateNote({...note, edting : false});
    };

    return(

      <div className='note-item'>
        <strong>{this.props.note.title}</strong> : {this.props.note.content}
        <button className='remove-note' onClick={this.props.handleRemoveNote.bind(null, this.props.note)}>Remove This Note</button>
        <button onClick={showModal}>Update This Note</button>
        <Modal handleModalClose={hideModal} show={this.props.note.editing}>
          <h2>Updating {this.props.note.title}</h2>
          <NoteForm
            handleComplete={updateClose}         
            note={this.props.note}
          />
        </Modal>
      </div>
    );
  } 
}

export default NoteItem;