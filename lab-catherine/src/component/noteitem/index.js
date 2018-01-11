import React from 'react';

class NoteItem extends React.Component {
  render() {
    return (
      <div>
        <li className ='note-item'>
          <p>Title: {this.props.note.title}</p>
          <p> Content: {this.props.note.content}</p>
        </li>
        <button className='delete-button' type="click" onClick={() => {this.props.handleRemoveNote(this.props.note);}}>Delete</button>
      </div>
    );
  }
}

export default NoteItem;