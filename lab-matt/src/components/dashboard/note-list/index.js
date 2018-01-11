import React from 'react';
import NoteItem from '../note-item/';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);  
  }

  handleDelete(event) {
    let id = event.target.className;
    this.props.deleteNote(id);
  }

  render() {
    return this.props.notes.map((note, index) => {
      return (
        <ul className='note-list' key={index}>
          <NoteItem note={note} />
          <button className={note.id} onClick={this.handleDelete}>Delete</button>
        </ul>
      );
    });
  }
}

export default NoteList;