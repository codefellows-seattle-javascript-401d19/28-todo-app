import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';
import uuid from 'uuid/v1';


class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes : [],
    };


    //=======================================================
    // Handlers

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  //=======================================================
  // Member functions

  handleAddNote(note) {

    note.id = uuid();
    note.editing = false;
    note.completed = false;


    this.setState(previousState => ({notes: [...previousState.notes, note]}));
  }

  handleRemoveNote(noteToDelete) {
  
    this.setState(previousState => ({notes: previousState.notes.filter(note => note.id !== noteToDelete.id)}));
  }

  handleUpdateNote(noteToUpdate) {
    this.setState(previousState => ({
      notes: previousState.notes
        .map(note => (note.id === noteToUpdate.id ? noteToUpdate : note)),
    }));
  }

  //=======================================================
  // Hooks

  render() {
    return (
      <div className='dashboard'>
        <h2>Dashboard</h2>
        <h3> Add a note with the form!</h3>
        <NoteForm handleComplete={this.handleAddNote} />
        <h4>Notes: {this.state.notes.length}</h4>
        <NoteList
          notes={this.state.notes}
          handleRemoveNote={this.handleRemoveNote}
          handleUpdateNote={this.handleUpdateNote}
        />
      </div>
    );
  }
}

export default Dashboard;