import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {

  render() {
    return (
      <ul>
        {
          this.props.listOfNotes.map((note, index) => 
            <NoteItem
              key={index}
              note={note}
              newNote={this.props.newNote}
              updateNote={this.props.updateNote}
              deleteNote={this.props.deleteNote}
            />
          )
        }
      </ul>
    );
  }
}

export default NoteList;