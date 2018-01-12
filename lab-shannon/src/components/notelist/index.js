import React from 'react';
import NoteItem from '../noteitem';

class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.notes.map((note, index) =>
          <NoteItem
            key={index}
            note={note}
            removeNote={this.props.removeNote}
            updateNote={this.props.updateNote}
          />
        )}
      </ul>
    );
  }
}


export default NoteList;
