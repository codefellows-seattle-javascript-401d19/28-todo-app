import React from 'react';
import uuidv1 from 'uuid/v1';


class NoteForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      createdOn : new Date(),
      id : uuidv1(),
      title : '',
      content : '',
    };

  //-----------------------------------------
  // Binding handlers
  //-----------------------------------------
  let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
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
    });
  }

  handleChange(event){
    let {name, value} = event.target;

    this.setState({
      [name] : value
    });
  }

  //-----------------------------------------
  // Hooks
  //-----------------------------------------

  render(){
    return(
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='note title here'
          value={this.state.title}
          onChange={this.handleChange}
          />
        <input
          type='text'
          name='content'
          placeholder='note content here'
          value={this.state.content}
          onChange={this.handleChange}
          />
        <button type='submit'>save note</button>
      </form>

    );
  }


}

export default NoteForm;