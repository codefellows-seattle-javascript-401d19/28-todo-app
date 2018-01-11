import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.buildNotes = this.buildNotes.bind(this);
  }

  buildNotes() {
    return this.props.notes.map((note, index) => {
      return (
        <li key={index}>Title: {note.title} Content: {note.content}</li>
      );
    });
  }

  render() {
    return(
      <ul>
        {this.buildNotes()}
      </ul>
    );
  }
}

export default NoteList;