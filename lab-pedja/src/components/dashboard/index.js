import React from "react";
import NoteForm from "../note-form";
import uuid from 'uuid';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      editing: false,
      completed: false,
    }

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  
  //------------------------------------------------------------
  //Member Functions
  //------------------------------------------------------------

  // ADD NOTE

  // Hooks
  render() {
    return (
      <div className='dashboard'>
      <h1>I am a Dashboard!</h1>
      <NoteForm handleAddExpense={this.handleAddExpense} />
      <ul>
        {
          this.state.expenses.map((expense,index) => 
            <li key={index}>{expense.title}:${expense.price}</li>)
        }
      </ul>
     </div>
    )
  }
}

// The dashboard component should manage the entire application state.
// The state should contain a notes array
// It should have a bound addNote(note) method that adds a note to state.notes
// each note that is added should have the following data
// id: always should contain the result of uuid.v1()
// editing: false by default
// completed: false by default
// content: user provided content
// title: user provided title
// It should have a bound removeNote(note) method that removes a note from state.notes based on its id
