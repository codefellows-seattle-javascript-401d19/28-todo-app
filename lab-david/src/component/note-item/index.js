import React from 'react';
import NoteForm from 'note-form';

class NoteItem extends React.Component{
  constructor(props){
    super(props);

  //-----------------------------------------
  // Binding handlers
  //-----------------------------------------
  // let memberFunctions = Object.getOwnPropertyNames(NoteItem.prototype);
  //   for(let functionName of memberFunctions){
  //     if(functionName.startsWith('handle')){
  //       this[functionName] = this[functionName].bind(this);
  //     }
  //   }
  }
  //-----------------------------------------
  // Member functions 
  //-----------------------------------------
  handleSubmit(event){
    event.preventDefault();

    this.props.handleAddNote(this.state);
    this.setState({
      title : '',
      content : '',
    }),
  }


  //-----------------------------------------
  // Hooks
  //-----------------------------------------

  render(){
    return(
      <div>
        <h2>Note title : {title}</h2>
        <p>Note content : {content}</p>
      </div>
    );
  }


}

export default NoteItem;