import React from 'react';

class NoteForm extends React.Component {

  addNote() {
    this.props.newNote();
  }

  render() {
    return (
      <form>
        <input type='text'></input>
      </form>
    );
  }
}

export default NoteForm;