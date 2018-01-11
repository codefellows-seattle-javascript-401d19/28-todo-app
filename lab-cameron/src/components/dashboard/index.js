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
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    let noteState = this.state.notes;
    
    note.editing = false;
    note.complete = true;

    this.setState({notes: [...noteState, note]});
  }

  removeNote(key) {
    const noteState = this.state.notes;
    const newNoteState = noteState.filter(note => {
      return note.id !== key;
    });
    this.setState({ notes: [...newNoteState] });
  }

  render() {
    return (
      <div>
        <NoteForm onComplete={this.addNote} />
        <NoteList onRemove={this.removeNote} notes={this.state.notes} />
      </div>
    );
  }
}

export default Dashboard;
