import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  
  //...............................................................
  /* Hooks - these React will call for you */
  //...............................................................
  render() {
    return (
      <div className='Notes'>
        <h1>Our Notes!</h1>
        <ul>
          {
            this.props.allNotes.map((note, index) => 
              <NoteItem 
                key={index} 
                note={note}	
                handleRemoveNote={this.props.handleRemoveNote}/>
            )}
        </ul>
      </div>
    );
  }
}

export default NoteList;