import React from 'react';
import NoteForm from '../note-form';
import NoteItem from '../note-item';
import NoteList from '../note-list';
import uuid from 'uuid';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    //...............................................................
    /* Binding Handlers */
    //...............................................................

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //...............................................................
  /* Member Functions -- these you call yourself */
  //...............................................................
  handleAddNote(note) {
    note.createdOn = new Date();
    note.id = uuid.v1();
    note.editing = false;
    note.completed = false;

    this.setState(previousState => {
      return { notes: [...previousState.notes, note] };
    });

  }

  handleRemoveNote(noteToRemove) {
    this.setState(previousState => {
      return { notes: previousState.notes.filter(note => note.id !== noteToRemove.id)};
    });
  }

  handleUpdateNote(noteToUpdate) {
    this.setState(previousState => {
      return  {notes: previousState.notes.map(note => note.id === noteToUpdate.id ? noteToUpdate : note)};
    });
  }
  //...............................................................
  /* Hooks - these React will call for you */
  //...............................................................
  render() {
    return (
      <div className='dashboard'>
        <h1>Dashboard!</h1>
        <NoteForm handleComplete={this.handleAddNote} />
        <ul>
          {
            this.state.notes.map((note, index) => 
              <li key={index}>
                <NoteItem
                  note={note} 
                  handleRemoveNote={this.handleRemoveNote}
                  handleUpdateNote={this.handleUpdateNote}/>
              </li>)
          }
        </ul>
      </div>
    );
  }
}

export default Dashboard;