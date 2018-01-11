import React from 'react';
import uuid from 'uuid/v1';

class NoteItem extends React.Component {
  constructor(props){
    super(props);

    this.createNote = this.createNote.bind(this);
  }

  createNote() {
    <div>Groot</div>;
  }

  render() {
    return(
      <li>
        {this.createNote}
        <button>Remove Note</button>
      </li>
    );
  }
}

export default NoteItem;
