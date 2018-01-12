import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';
import uuidv1 from 'uuid/v1';
// const uuidv1 = require('uuid/v1');

class Dashboard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      notes : [],
    };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle') ){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //================================
  // Member functions
  //================================

  handleAddNote(note){
    note.createdOn = new Date().toString();
    note.id = uuidv1();
    note.editing = false;
    note.completed = false;

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  handleRemoveNote(note){
    let tempNotes = this.state.notes;
    let index = tempNotes.indexOf(note);
    tempNotes.splice(index, 1);

    this.setState({notes: tempNotes});
  }

  //==================================
  //hooks- React Calls these
  //=================================
  render() {
    return(
      <div className="dashboard">
        <h1> I am the Dashboard </h1>
        <NoteForm handleComplete={this.handleAddNote} />
        <NoteList notes={this.state.notes} handleRemoveNote={this.handleRemoveNote} />
      </div>
    );
  }
}

export default Dashboard;
