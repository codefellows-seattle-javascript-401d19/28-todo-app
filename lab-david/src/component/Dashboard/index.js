import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';
import NoteItem from '../note-item';


class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes : [],
    };

    //-----------------------------------------
    // Binding Function
    //-----------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //-----------------------------------------
  // Member Functions
  //-----------------------------------------
  handleAddNote(note){
    note.editing = false;
    note.completed = true;

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  handleRemoveNote(note){
    this.setState(previousState => {
      return { notes : previousState.notes.filter(item => item.id !== note.id) };
    });
  }

  handleUpdateNote(noteToUpdate){
    this.setState(previousState => {
      let updatedNotes = previousState.notes.map(
        note => note.id === noteToUpdate.id ? noteToUpdate : note);

      return { notes : updatedNotes };
    });
  }
  //-----------------------------------------
  // Hooks
  //-----------------------------------------
  render(){
    return (
      <div className='dashboard'>
        <h1>This is the dashboard page..</h1>
        <NoteForm 
          handleAddNote={this.handleAddNote}
        />
        
        <NoteList 
          notes={this.state.notes} 
          handleRemoveNote={this.handleRemoveNote} 
          handleUpdateNote={this.handleUpdateNote}
        />  
      </div>
    );

  }
}

// this was line 50 : 
// <NoteList notes={this.state.notes} handleRemoveNote={this.handleRemoveNote} />
// <NoteItem
//             note={this.notes.title}
//           />

export default Dashboard;