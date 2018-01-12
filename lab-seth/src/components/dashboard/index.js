import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';
import uuid from 'uuid';


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

    note.id = uuid.v1();
    note.editing = false;
    note.completed = false;


    this.setState(previousState => ({notes: [...previousState.notes, note]}));
  }

  handleRemoveNote(id) {
  
    this.setState(previousState => ({notes: previousState.notes.filter(note => note.id !== id)}));
  }

  handleUpdateNote(noteToUpdate) {
    this.setState(previousState => {
      let updatedNotes = previousState.notes.map(note => note.id === noteToUpdate.id ? noteToUpdate : note);

      return {notes : updatedNotes};
    });
  }

  //=======================================================
  // Hooks

  render() {
    return (
      <div className='dashboard'>
        <h2>Dashboard</h2>
        <h3> Add a note with the form!</h3>
        <NoteForm handleNote={this.handleAddNote} handleUpdateNote={this.handleUpdateNote} />
        <h4>Notes: {this.state.notes.length}</h4>
        <NoteList
          notes={this.state.notes}
          handleRemoveNote={this.handleRemoveNote}
          handleUpdateNote={this.handleUpdateNote}
          handleAddNote={this.handleAddNote}
          />
      </div>
    );
  }
}

export default Dashboard;