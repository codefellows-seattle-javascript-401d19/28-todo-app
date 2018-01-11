import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';

class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes :[],
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
  
    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  handleRemoveNote(note) {
  
    this.setState(previousState => {
      return {notes: [...previousState.notes, note]}; //How do we remove?
    });
  }

  //=======================================================
  // Hooks

  render() {
    return (
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <NoteForm handleAddNote={this.handleAddNote} handleRemoveNote={this.handleRemoveNote} />
        <h2>Notes: {this.state.notes.length}</h2>
        <NoteList />
      </div>
    );
  }
}

export default Dashboard;