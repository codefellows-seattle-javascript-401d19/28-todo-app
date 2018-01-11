import React from 'react';

class NoteItem extends React.Component {
  render() {
    let {title, content, id, editing, completed} = this.props.notes[this.props.index];
    return(
      <div>
        <p>title: {title}</p>
        <p>note: {content}</p>
        <p>id: {id}</p>
        <p>editing: {editing}</p>
        <p>completed: {completed}</p>
        <button id={id} onClick={this.props.removeNote.bind(null, this.props.notes[this.props.index])}>Remove Note</button>
      </div>
    );
  }
}

export default NoteItem;
