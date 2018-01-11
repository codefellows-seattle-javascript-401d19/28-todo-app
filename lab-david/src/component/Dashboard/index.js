import React from 'react';
import NoteForm from '../note-form';

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
    
  }
  //-----------------------------------------
  // Hooks
  //-----------------------------------------
  render(){

  

    return(
      <div className='dashboard'>
        <h1>This is the dashboard page..</h1>
        <NoteForm handleAddNote={this.handleAddNote}/>
        
      </div>
    );

  }
}

export default Dashboard;