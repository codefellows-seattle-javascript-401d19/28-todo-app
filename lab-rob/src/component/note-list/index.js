import './note-list.scss';

import React from 'react';

import NoteItem from '../note-item';

class NoteList extends React.Component {
  render() {
    let {removeNote, updateNote} = this.props;
    
    return (
      <ul className='note-list'>
        {this.props.notes.map((note, index) => {
          return (
            <li key={index}>
              <NoteItem note={note} removeNote={removeNote} updateNote={updateNote} itemNumber={index + 1} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;