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

    // Binding Handlers

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  // Member Functions

  handleAddNote(note){
    note.createdOn = new Date();
    note.id = uuid.v1();
    note.editing = false;
    note.completed = false;

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  handleRemoveNote(noteToRemove){
    this.setState(previousState => {
      return {notes: previousState.notes.filter(note => {
        return note.id !== noteToRemove.id;
      })};
    });
  }

  handleUpdateNote(noteToUpdate){
    this.setState(previousState => {
      let updatedNotes = previousState.notes.map(
        note => note.id === noteToUpdate.id ? noteToUpdate : note);
      return {notes: updatedNotes};
    });
  }

  // Hooks

  render(){
    return(
      <div className='dashboard'>
        <h3 className="welcome">Enter a note below</h3>
        <NoteForm
          handleComplete={this.handleAddNote}
        />
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
