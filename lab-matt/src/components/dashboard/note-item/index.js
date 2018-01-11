import React from 'react';

class NoteItem extends React.Component {
  render() {
    return(
      <li>
        Title: {this.props.note.title} 
        Content: {this.props.note.content}
      </li>
    );
  }
}

export default NoteItem;