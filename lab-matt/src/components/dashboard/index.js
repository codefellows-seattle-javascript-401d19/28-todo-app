import React from 'react';
import NoteForm from './note-form/';
import NoteList from './note-list/';
import {v1} from 'uuid';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = { notes: [] };

    this.handleAddNote = (note) => {
      note.id = v1();
      note.editing = false;
      note.completed = false;
  
      this.setState({ notes: [...this.state.notes, note] });
    };
    
    this.handleRemoveNote = (uuid) => {
      this.setState({ notes: this.state.notes.filter((note, i) => {
        return note.id !== uuid;
      })});
    };
  }


  render() {
    return (
      <div className='dashboard'>
        <h2>Hello From the Dashboard</h2>
        <NoteForm addNote={this.handleAddNote} />
        <NoteList notes={this.state.notes} deleteNote={this.handleRemoveNote} />
      </div>
    );
  }
}

export default Dashboard;