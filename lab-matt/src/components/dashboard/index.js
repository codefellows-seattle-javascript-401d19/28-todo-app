import React from 'react';
import NoteForm from './note-form/';
import NoteList from './note-list/';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = { notes: [{title: 'hi', content: 'there'}] };
    // this.state = { notes: [] };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleAddNote(note) {
    console.log('addnote');
    note.id = '1';

    this.setState({ notes: [...this.state.notes, note] });
  }

  render() {
    return (
      <div>
        <h2>Hello From the Dashboard</h2>
        <NoteForm addNote={this.handleAddNote} />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default Dashboard;