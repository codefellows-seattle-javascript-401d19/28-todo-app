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

  addNote(title, content, editing = false, completed = false){
    let note = {title, content, editing, completed, id: uuid.v1()};
    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  updateNote(noteToUpdate) {
    this.setState(previousState => {
      let updatedNote = previousState.notes.map(
        note => note.id === noteToUpdate.id ?
          noteToUpdate : note);

      return {notes: updatedNote};
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
        <NoteForm newNote={this.addNote}/>
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