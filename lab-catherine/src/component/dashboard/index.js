import React from 'react';
import uuidv1 from 'uuid/v1';
import NoteForm from '../noteform';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleAddNote(note) {
    note.id = uuidv1(),
    note.editing = false,
    note.completed = false,

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  handleRemoveNote(note) {
    this.setState(previousState => {
      return {notes: previousState.notes.filter(noteToDelete => noteToDelete.id !== note.id)};
    });
  }

  render() {
    return (
      <div className='dashboard'>
        <h2>Create your own Todo List:</h2>
        <NoteForm handleAddNote={this.handleAddNote} handleRemoveNote={this.handleRemoveNote}/>
      </div>
    );
  }
}

export default Dashboard;