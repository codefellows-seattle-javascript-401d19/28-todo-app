import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';
import uuid from 'uuid';


class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote(note){
    note.id = uuid.v1();
    note.editing = false;
    note.completed = false;
    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  updateNote(noteToUpdate) {
    this.setState(previousState => {
      let updatedNotes = previousState.notes.map(
        note => note.id === noteToUpdate.id ?
          noteToUpdate : note);

      return {notes: updatedNotes};
    });
  }

  deleteNote(id){
    let remainingNotes = this.state.notes.filter(note => {
      if (note.id !== id){
        return note;
      }
    });
    this.setState({notes: remainingNotes});
  }

  render() {
    return (
      <main>
        <h2>Dashboard</h2>
        <NoteForm completeNote={this.addNote}/>
        <NoteList
          updateNote={this.updateNote}
          deleteNote={this.deleteNote}
          listOfNotes={this.state.notes}
        />
      </main>
    );
  }
}

export default Dashboard;