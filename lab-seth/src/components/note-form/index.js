import React from 'react';
const uuidv1 = require ('uuid/v1');
import uuid from 'uuid';

class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      content: '',
      editing: true,
      completed: false,
    };

    //=======================================================
    // Handlers

    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  //=======================================================
  // Member functions

  handleSubmit(event){
    event.preventDefault();

    this.props.onComplete({
      id: uuidv1(),
      title : event.target.title.value,
      content : event.target.content.value,
      editing : false,
      completed: true,
    });

    this.setState({
      title: '',
      Component: '',
    });
  }

  handleChange(event){
    let {name, value} = event.target;

    this.setState({
      [name] : value,
    });
  }

  //=======================================================
  // Hooks

  render(){
    return(
      <div>
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input type='text' name='title' placeholder='title' value={this.state.title} onChange={this.handleChange} />
        <input type='text' name='content' placeholder='content' value={this.state.content} onChange={this.handleChange} />
        <button type='submit'>Create Note</button>
      </form>
      </div>
    );
  }
}

export default NoteForm;