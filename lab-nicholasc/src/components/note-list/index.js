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
              <NoteItem
                key={index}
                note={note}
                handleRemoveNote={this.props.handleRemoveNote}
                handleUpdateNote={this.props.handleUpdateNote}
              />
            )
          }
        </ul>

      </div>
    );
  }
}

export default NoteList;
