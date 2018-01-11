import React from 'react';

class NoteItem extends React.Component {
  
  render(){
    console.log(this.props);
    return(
      <li>
        <h4>{this.props.note.title}</h4>
        <p>{this.props.note.content}</p>
        <button onClick={() => this.props.deleteNote(this.props.note.id)}>Delete</button>
      </li>
    );
  }
}

export default NoteItem;