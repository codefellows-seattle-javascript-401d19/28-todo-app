import React from 'react';
import NoteItem from '../noteitem';

class NoteList extends React.Component {
  render() {
    return (
      <div className='note-list'>
        <h2>Your Notes:</h2>
        <ul>
          {this.props.notes.map((note, index) => (
            <NoteItem key={index} note={note} handleRemoveNote={this.props.handleRemoveNote} />
          ))}
        </ul>
      </div>
    );
  }
}

export default NoteList;
