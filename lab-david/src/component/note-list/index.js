import React from 'react';

class NoteList extends React.Component {
  constructor(props){
    super(props);

    //-----------------------------------------
    // Binding Function
    //-----------------------------------------
  //   let memberFunctions = Object.getOwnPropertyNames(NoteList.prototype);
  //   for(let functionName of memberFunctions){
  //     if(functionName.startsWith('handle')){
  //       this[functionName] = this[functionName].bind(this);
  //     }
  //   }
  }
  //-----------------------------------------
  // Member Functions
  //-----------------------------------------
  handleDisplayNotes(note){
    
  }
  //-----------------------------------------
  // Hooks
  //-----------------------------------------
  render(){

  

    return(
      <div className='noteList'>
        <h2>Notes:</h2>
        <ul>
        {
          this.props.state.notes.map((note,index) => 
            <li key={index}> {note.title}:{note.content}</li>)
        }
        </ul>
      </div>
    );

  }
}

export default NoteList;