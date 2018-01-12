import React from "react";
import uuid from 'uuid';

import NoteForm from "../note-form";
import NoteList from "../note-list";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    }

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  
  //------------------------------------------------------------
  //Member Functions
  //------------------------------------------------------------

  handleAddNote(note) {
    note.id = uuid.v1();
    note.editing = false;
    note.completed = false;
    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  handleRemoveNote(noteToRemove) {
    this.setState(previousState => ({
      notes: previousState.notes.filter(
        notes => notes.id !== noteToRemove.id
      ),
    }));
  }

  handleUpdateNote(noteToUpdate){
    this.setState(previousState => {
      let updatedNote = previousState.notes.map(
        note => note.id === noteToUpdate.id ?
        noteToUpdate : note);

      return {notes : updatedNote};
    });
  }

  //------------------------------------------------------------
  // Hooks
  //------------------------------------------------------------
  render() {
    return (
      <div className='dashboard'>
      <h2>Dashboard TODO list</h2>
      <NoteForm handleComplete={this.handleAddNote} />
      <NoteList 
        notes={this.state.notes}
        handleRemoveNote={this.handleRemoveNote}
        handleUpdateNote={this.handleUpdateNote}
      />      
     </div>
    )
  }
}

export default Dashboard;