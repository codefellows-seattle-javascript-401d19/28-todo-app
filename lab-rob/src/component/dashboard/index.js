import React from 'react';

import autoBind from '../../lib/auto-bind';
import NoteForm from '../note-form';
import NoteList from '../note-list';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    autoBind(this, Dashboard, {addNote: true, removeNote: true});
  }

  // -----------------------------
  // Member's Only
  // -----------------------------

  addNote(note) {
    this.setState(previousState => ({notes: [...previousState.notes, note]}));
  }

  removeNote(id) {
    this.setState(previousState => ({notes: previousState.notes.filter(note => note.id !== id)}));
  }

  // -----------------------------
  // Captain Hooks
  // -----------------------------

  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <p>Create a note and it will appear in a list below!</p>
        <NoteForm onComplete={this.addNote} />
        <NoteList notes={this.state.notes} removeNote={this.removeNote} />
      </div>
    );
  }
}

export default Dashboard;