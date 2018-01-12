import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  render() {
    return (
      <div className="note-list">
        <h2> I am the Note List </h2>
        <ul>
          {
            this.props.notes.map((note, index) =>
              <NoteItem key={index} note={note} />
            )
          }
        </ul>
      </div>
    );
  }
}
// <li key={index}>{note.title}: {note.content}. Written on {note.createdOn}<button onClick={this.handleRemoveNote}>Remove Note</button></li>)
