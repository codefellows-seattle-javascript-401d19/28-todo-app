import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  render() {
    return (
      <ul className='note-list'>
        {this.props.notes.map((note, index) => 
          <li key={index}>
            <NoteItem
              note={note}
              handleRemoveNote={this.props.handleRemoveNote}
              handleUpdateNote={this.props.handleUpdateNote}
              handleAddNote={this.props.handleAddNote}
            />
          </li>)
        }
      </ul>
    );
  } 
}

export default NoteList;