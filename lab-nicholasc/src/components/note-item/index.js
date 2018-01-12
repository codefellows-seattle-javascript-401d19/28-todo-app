import React from 'react';

class NoteItem extends React.Component {
  render () {
    let {index, title, content, createdOn} = this.props.note;
    return (
      <div className ="note">
        <li key={index}>
          {title}: {content}. Written on {createdOn}
          <button
            onClick={this.props.handleRemoveNote.bind(null, this.props.note)}>
            Remove Note
          </button>
        </li>
      </div>
    );
  }
}

export default NoteItem;
