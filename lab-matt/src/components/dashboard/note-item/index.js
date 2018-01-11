import React from 'react';

class NoteItem extends React.Component {
  render() {
    return(
      <ul className='note-item'>
        <li>Title: {this.props.note.title} </li>
        <li>Content: {this.props.note.content}</li>
      </ul>
    );
  }
}

export default NoteItem;