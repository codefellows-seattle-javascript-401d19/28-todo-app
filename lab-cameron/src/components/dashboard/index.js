import React, { Component } from 'react';
import NoteForm from '../noteform';
import NoteList from '../notelist';
import uuidv1 from 'uuid/v1';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  addNote(note) {
    let noteState = this.state.notes;

    note.editing = false;
    note.complete = true;
    note.id = uuidv1();

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  removeNote(key) {
    this.setState(previousState => ({
      notes: previousState.notes.filter(note => {
        return note.id !== key;
      }),
    }));
  }

  updateNote(noteToUpdate) {
    this.setState(previousState => ({
      notes: previousState.notes.map(note => {
        return note.id === noteToUpdate.id ? noteToUpdate : note;
      }),
    }));
  }

  render() {
    return (
      <div>
        <NoteForm onComplete={this.addNote} />
        <NoteList
          onRemove={this.removeNote}
          onUpdate={this.updateNote}
          notes={this.state.notes}
        />
      </div>
    );
  }
}

export default Dashboard;
