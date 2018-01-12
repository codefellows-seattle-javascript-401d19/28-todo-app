import React from 'react';
import NoteItem from '../noteitem';

class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.notes.map((note, index) => {
          return (
            <li key={index}>
              <NoteItem
                note={note}
                removeNote={this.props.removeNote}
                updateNote={this.props.updateNote}
              />
            </li>
          );
        }
        )}
      </ul>
    );
  }
}


export default NoteList;
