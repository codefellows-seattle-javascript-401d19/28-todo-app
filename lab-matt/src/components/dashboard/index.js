import React from 'react';
import NoteForm from './note-form/';
import NoteList from './note-list/';
import {v1} from 'uuid';
import './dashboard.scss';

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
    this.handleRemoveNote = (noteToBeRemoved) => {
      this.setState({ notes: this.state.notes.filter(note => {
        return note.id !== noteToBeRemoved.id;
      })});
    };
    this.handleUpdateNote = (noteToBeUpdated) => {
      this.setState({ 
        notes: this.state.notes.map(note => {
          return note.id === noteToBeUpdated.id ? noteToBeUpdated : note;
        }),
      });
    };
  }  

  render() {
    return (
      <div className='dashboard'>
        <h2>Add A New Note</h2>
        <NoteForm handleNote={this.handleAddNote} />
        <h2>Past Notes</h2>
        <hr/>
        <NoteList notes={this.state.notes} deleteNote={this.handleRemoveNote} updateNote={this.handleUpdateNote} />
      </div>
    );
  }
}

export default Dashboard;