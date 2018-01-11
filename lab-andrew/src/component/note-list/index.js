import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {

  render() {
    return (
      <ul>

        <NoteItem/>
      </ul>
    );
  }
}

export default NoteList;