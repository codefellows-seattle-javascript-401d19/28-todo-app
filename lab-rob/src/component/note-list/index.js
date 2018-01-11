import React from 'react';

import NoteItem from '../note-item';

class NoteList extends React.Component {
  render() {
    return (
      <ul className='note-list'>
        {this.props.notes.map((note, index) => <NoteItem key={index} note={note} removeNote={this.props.removeNote} />)}
      </ul>
    );
  }
}

export default NoteList;