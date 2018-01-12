import React from 'react';
import NoteForm from '../noteform';
import NoteList from '../notelist';
import uuid from 'uuid/v1';
import './dashboard.scss';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  addNote(noteToCreate) {
    noteToCreate.id = uuid();
    noteToCreate.editing = false;
    noteToCreate.completed = false;

    this.setState(previousState => {
      return {notes: [...previousState.notes, noteToCreate]};
    });
  }

  removeNote(noteToRemove) {
    this.setState(previousState => {
      let remainingNotes = previousState.notes.filter(note => {
        if(note.id !== noteToRemove.id){
          return note;
        }
      });
      return {notes: remainingNotes};
    });
  }

  updateNote(noteToUpdate) {
    this.setState(previousState => {
      let updatedNotes = previousState.notes.map(note => {
        if(note.id === noteToUpdate.id){
          return noteToUpdate;
        }else{
          return note;
        }
      });
      return {notes: updatedNotes};
    });
  }

  render() {
    return (
      <div className='dashboard'>
        <h2>Add A Note</h2>
        <NoteForm handleComplete={this.addNote} notes={this.state.notes}/>
        <h2>Existing Notes</h2>
        <p>Double click on a note to edit it</p>
        <NoteList removeNote={this.removeNote} updateNote={this.updateNote} notes={this.state.notes}/>
      </div>
    );
  }
}

export default Dashboard;
