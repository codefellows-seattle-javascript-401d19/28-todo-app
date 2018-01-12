import React from 'react';
import NoteForm from '../noteform';
import NoteList from '../notelist';
import uuid from 'uuid/v1';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.showEditView = this.showEditView.bind(this);
  }

  addNote(noteToCreate, id = uuid(), editing = 'false', completed = 'false') {
    let note = {
      title : noteToCreate.title,
      content : noteToCreate.content,
      id,
      editing,
      completed,
    };

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
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

  showEditView() {
    // Show the NoteForm and a Cancel Button
    // onComplete the NoteForm should update the notes title or content
  }

  render() {
    return (
      <div>
        <h2>Add A Note</h2>
        <NoteForm addNote={this.addNote} notes={this.state.notes}/>
        <h2>Existing Notes</h2>
        <NoteList removeNote={this.removeNote} updateNote={this.updateNote} handleEditView={this.handleEditView} notes={this.state.notes}/>
      </div>
    );
  }
}

export default Dashboard;
