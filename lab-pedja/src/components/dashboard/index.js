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

  handleRemoveNote(note) {
    const notes = this.state.notes.filter(noteToFilter => noteToFilter.id !== note.id);
    this.setState({ notes });
  }

  //------------------------------------------------------------
  // Hooks
  //------------------------------------------------------------
  render() {
    return (
      <div className='dashboard'>
      <h2>Dashboard - TODO list</h2>
      <NoteForm handleAddNote={this.handleAddNote} />
      <NoteList 
        notes={this.state.notes}
        handleRemoveNote={this.handleRemoveNote}
      />      
     </div>
    )
  }
}

export default Dashboard;