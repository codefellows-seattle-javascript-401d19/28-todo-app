import React from 'react';
import NoteForm from '../note-form';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(NoteItem.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  render() {
    return (
      <div className='note-item'>
        <div className ='delete'>
          <button className='delete-button' onClick{handleRemoveNote}>Delete</button>
        </div>
      </div>
    )
  }
}