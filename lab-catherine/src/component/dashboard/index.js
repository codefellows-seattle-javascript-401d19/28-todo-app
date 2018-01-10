import React from 'react';
import uuidv1 from 'uuid/v1';
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
    note.id = uuidv1(),
    note.editing = false,
    note.completed = false,

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  handleRemoveNote(note) {
    let removedNoteState = this.state.notes.filter(note => {
      return note.id !== note;
    });

    this.setState({notes: [...removedNoteState]});
  }

  render() {
    return (
      <div className='dashboard'>
        <h1>Dashboard Page!</h1>
        <NoteForm handleAddNote={this.handleAddNote}/>
        <ul>
          {
            this.state.notes.map((note, index) => 
              <li key={index}>
                <p>Title: {note.title}</p>
                <p> Content: {note.content}</p>
                <button onClick={() => this.handleRemoveNote(note.id)} type='button'>Delete</button></li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Dashboard;