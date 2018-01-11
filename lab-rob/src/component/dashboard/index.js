import React from 'react';

import autoBind from '../../lib/auto-bind';
import NoteForm from '../note-form';

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
    this.setState(previousState => previousState.notes = [...previousState.notes, note]);
  }

  removeNote(id) {
    this.setState(previousState => previousState.notes = previousState.notes.filter(note => note.id !== id));
  }

  // -----------------------------
  // Captain Hooks
  // -----------------------------

  render() {
    return (
      <div className="dashboard">
        <h2>Hi I Dashy-B!</h2>
        <NoteForm onComplete={this.addNote} />
      </div>
    );
  }
}

export default Dashboard;