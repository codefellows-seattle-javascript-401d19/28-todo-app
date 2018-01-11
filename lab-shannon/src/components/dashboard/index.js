import React from 'react';
import NoteForm from '../noteform';
import NoteList from '../notelist';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  removeNote(note) {}

  render() {
    return (
      <div>
        <h2>Add A Note</h2>
        <NoteForm addNote={this.addNote}/>
        <h2>Existing Notes</h2>
        <NoteList />
      </div>
    );
  }
}

export default Dashboard;
