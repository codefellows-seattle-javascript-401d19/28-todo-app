import React from 'react';
import ExpenseForm from '../expense-form';
import uuidv1 from 'uuid/v1';

class Dashboard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      notes : [],
    };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle') ){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //================================
  // Member functions
  //================================

  handleAddNote(note){
    note.createdOn = new Date().toString();
    note.id = uuidv1();
    note.editing = false;
    note.completed = false;

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  handleRemoveNote(note){
    let tempNotes = this.state.notes;
    let index = tempNotes.indexOf(note);
    tempNotes.splice(index, 1);

    this.setState({notes: tempNotes});
  }

  //==================================
  //hooks- React Calls these
  //=================================
  render() {
    return(
      <div className="dashboard">
        <h1> I am the Dashboard </h1>
        <ExpenseForm handleComplete={this.handleAddNote} />
        <ul>
          {
            this.state.notes.map((note, index) =>
              <li key={index}>{note.title}: {note.content}. Written on {note.createdOn}<button onClick={this.handleRemoveNote}>Remove Note</button></li>)
          }
        </ul>
      </div>
    );
  }
}

export default Dashboard;
