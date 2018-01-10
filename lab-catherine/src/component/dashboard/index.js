import React from 'react';
import uuid from 'uuid';
import NoteForm from '../noteform';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleAddNote(note) {
    note.id = uuid.v1(),
    note.editing = false,
    note.completed = false,
    // note.content = {content},
    // note.title = {title},

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  // handleRemoveNote(note) {

  // }

  render() {
    return (
      <div className='dashboard'>
        <h1>Dashboard Page!</h1>
        <NoteForm handleAddNote={this.handleAddNote}/>
        <ul>
          {
            this.state.notes.map((note, index) => 
              <li key={index}>{note.title}: {note.content}</li>)
          }
        </ul>
      </div>
    );
  }

}

export default Dashboard;