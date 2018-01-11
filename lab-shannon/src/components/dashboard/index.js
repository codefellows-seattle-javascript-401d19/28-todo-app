import React from 'react';
import NoteForm from '../noteform';
import NoteList from '../notelist';
import uuid from 'uuid/v1';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(title, content, id = uuid(), editing = false, completed = false) {
    let note = {
      title,
      content,
      id,
      editing,
      completed,
    };

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  removeNote(note) {}

  render() {
    console.log(this.state.notes);
    return (
      <div>
        <h2>Add A Note</h2>
        <NoteForm addNote={this.addNote}/>
        <h2>Existing Notes</h2>
        <NoteList removeNote={this.removeNote}/>
      </div>
    );
  }
}

export default Dashboard;
