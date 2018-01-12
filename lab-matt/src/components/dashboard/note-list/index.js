import React from 'react';
import NoteItem from '../note-item/';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleUpdate = (note) => {
      this.props.updateNote(note);
    };
  }


  render() {
    return this.props.notes.map((note, index) => {
      return (
        <ul className='note-list' key={index}>
          <NoteItem note={note} updateNote={this.handleUpdate}/>
          <button className={note.id} onClick={this.props.deleteNote.bind(null, note)}>Delete</button>
        </ul>
      );
    });
  }
}

export default NoteList;