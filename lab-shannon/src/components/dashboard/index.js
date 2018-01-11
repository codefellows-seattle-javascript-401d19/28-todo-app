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
    this.showEditView = this.showEditView.bind(this);
  }

  addNote(title, content, id = uuid(), editing = 'false', completed = 'false') {
    let note = {
      title,
      content,
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

  showEditView() {
  }

  render() {
    return (
      <div>
        <h2>Add A Note</h2>
        <NoteForm addNote={this.addNote}/>
        <h2>Existing Notes</h2>
        <NoteList removeNote={this.removeNote} showEditView={this.showEditView} notes={this.state.notes}/>
      </div>
    );
  }
}

export default Dashboard;
