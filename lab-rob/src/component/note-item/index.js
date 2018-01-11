import React from 'react';

class NoteItem extends React.Component {
  render() {
    let note = this.props.note;
    return (
      <li className='note'>
        {note.title}: {note.content}
        <button onClick={this.props.removeNote.bind(this, note.id)}>Remove Note</button>
      </li>
    );
  }
}

export default NoteItem;