import React from 'react';
import uuid from 'uuid/v1';

class NoteItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: uuid(),
      editing: false,
      completed: false,
      content: '',
      title: '',
    };

    this.createNote = this.createNote.bind(this);
  }

  createNote() {
    
  }

  render() {
    return(
      <li>
        {this.createNote}
      </li>
    );
  }
}

export default NoteItem;
