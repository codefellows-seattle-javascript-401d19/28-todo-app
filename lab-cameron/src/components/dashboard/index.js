import React, { Component } from 'react';
import NoteForm from '../noteform';
import NoteList from '../notelist';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
  }

  addNote(note) {
    // do something
  }

  render() {
    return (
      <div>
        <NoteForm />
        <NoteList />
      </div>
    );
  }
}

export default Dashboard;
