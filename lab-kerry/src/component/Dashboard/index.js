import React from 'react';
import NoteForm from '../note-form';
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

    this.setState(previousState => {
      return { notes: [...previousState.notes, note] };
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
              <li key={index}>{note.title}:${note.content}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Dashboard;