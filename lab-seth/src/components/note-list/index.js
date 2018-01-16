import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  render() {
    let {handleRemoveNote, handleUpdateNote} = this.props;

    return (
      <ul className='note-list'>
        {this.props.notes.map((note, index) => {
          return (
            <li key={index}>
              <NoteItem
                note={note}
                handleRemoveNote={handleRemoveNote}
                handleUpdateNote={handleUpdateNote}
              />
            </li>
          );
        })}
      </ul>
    );
  } 
}

export default NoteList;