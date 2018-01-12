import React from 'react';
import uuidv1 from 'uuid/v1';
import NoteForm from '../noteform';
import NoteList from '../notelist';
import NoteItem from '../noteitem';

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
    
    localStorage.setItem('notes', JSON.stringify(this.state.notes));

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  
  }

  handleRemoveNote(noteToDelete) {
    localStorage.removeItem('notes');
    this.setState(previousState => {
      return {notes: previousState.notes.filter(note => note.id !== noteToDelete.id)};
    });
  }

  handleUpdateNote(noteToUpdate) {
    localStorage.removeItem('notes');
    this.setState(previousState => {
      let updatedNotes = previousState.notes.map(note => note.id === noteToUpdate.id ? noteToUpdate : note);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));

      return {notes : updatedNotes};
    });
  }

  componentDidMount(notes) {
    const cachedNotes = localStorage.getItem('notes');
    if(cachedNotes) {
      this.setState({ notes: JSON.parse(cachedNotes)});
    }
  }


  render() {
    return (
      <div className='dashboard'>
        <h2>Create your own Todo List:</h2>
        <NoteForm handleComplete={this.handleAddNote}/>
        <NoteList notes={this.state.notes} handleRemoveNote={this.handleRemoveNote} handleUpdateNote={this.handleUpdateNote}/>
      </div>
    );
  }
}

export default Dashboard;