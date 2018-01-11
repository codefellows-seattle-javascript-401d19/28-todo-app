import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';
import NoteItem from '../note-item';
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

  handleRemoveNote(note) {
    this.setState(previousState => {
	
      return { notes: previousState.notes.filter(item => item.id !== note.id)};
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
		
        <NoteList 
          allNotes={this.state.notes} 
          handleRemoveNote={this.handleRemoveNote}/>

      </div>
    );
  }
}

export default Dashboard;