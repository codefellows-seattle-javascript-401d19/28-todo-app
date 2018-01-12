import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';

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
  
    this.setState(previousState => ({notes: [...previousState.notes, note]}));
  }

  handleRemoveNote(id) {
  
    this.setState(previousState => ({notes: previousState.notes.filter(note => note.id !== id)}));
  }

  //=======================================================
  // Hooks

  render() {
    return (
      <div className='dashboard'>
        <h2>Dashboard</h2>
        <p> Add a note with the form!</p>
        <NoteForm onComplete={this.handleAddNote} />
        <h2>Notes: {this.state.notes.length}</h2>
        <NoteList notes={this.state.notes} removeNote={this.handleRemoveNote} />
      </div>
    );
  }
}

export default Dashboard;