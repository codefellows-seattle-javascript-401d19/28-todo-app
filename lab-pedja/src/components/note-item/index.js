import React from "react";

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li className='note-item'> 
          <p>Title: {this.props.note.title}</p>
          <p>Content: {this.props.note.content}</p>
        </li>
        <button type='click' onClick={() => {this.props.handleRemoveNote(this.props.note);}}> remove note </button>
      </div>
    )
  }
}

export default NoteItem;
