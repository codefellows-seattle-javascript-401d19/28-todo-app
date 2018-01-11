import React from 'react';

class NoteItem extends React.Component {
  render() {
    let { id, title, content } = this.props.note;
    return (
      <div>
        <li className="note-item">
          {title}: {content}
        </li>
        <button
          type="click"
          onClick={() => {
            this.props.handleRemoveNote(this.props.note);
          }}
        >
					Delete
        </button>
      </div>
    );
  }
}

export default NoteItem;
