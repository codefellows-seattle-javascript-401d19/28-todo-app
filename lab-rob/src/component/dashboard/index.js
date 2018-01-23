import './dashboard.scss';

import React from 'react';
import uuid from 'uuid/v1';

import autoBind from '../../lib/auto-bind';
import NoteForm from '../note-form';
import NoteList from '../note-list';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    autoBind(this, Dashboard, {
      addNote: true,
      removeNote: true,
      updateNote: true,
    });
  }

  // -----------------------------
  // Member's Only!
  // -----------------------------

  addNote(note) {
    note.id = uuid();
    note.editing = false;
    note.completed = false;

    this.setState(previousState => ({
      notes: [...previousState.notes, note],
    }));
  }

  updateNote(updatedNote) {
    this.setState(previousState => ({
      notes: previousState.notes
        .map(note => (note.id === updatedNote.id ? updatedNote : note)),
    }));
  }

  removeNote(noteToRemove) {
    this.setState(previousState => ({
      notes: previousState.notes
        .filter(note => note.id !== noteToRemove.id),
    }));
  }

  // -----------------------------
  // Captain Hooks
  // -----------------------------

  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <p>Create a note and it will appear in a list below!</p> 
        <p>To edit your note, double click the note's content.</p>
        <NoteForm handleComplete={this.addNote} />
        <NoteList notes={this.state.notes} removeNote={this.removeNote} updateNote={this.updateNote} />
      </div>
    );
  }
}

export default Dashboard;