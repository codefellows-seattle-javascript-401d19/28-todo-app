import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
 
  //-----------------------------------------
  // Hooks
  //-----------------------------------------
  render(){
    return(
      <div className='noteList'>
        <h2>Notes:</h2>
        <ul>
        {
          this.props.notes.map((note,index) => (
            <NoteItem key={index} note={note} handleRemoveNote={this.props.handleRemoveNote} />
          ))}
        </ul>
      </div>
    );

  }
}

export default NoteList;