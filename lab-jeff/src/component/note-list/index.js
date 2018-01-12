import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  render() {
    return (
      <div className="note-list">
        <h3> List of notes </h3>
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
