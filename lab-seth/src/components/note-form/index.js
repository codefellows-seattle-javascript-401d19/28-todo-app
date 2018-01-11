import React from 'react';
const uuidv1 = require ('uuid/v1');

class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: uuidv1(),
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

    this.props.handleAddNote(this.state);
    this.setState({
      title : '',
      content : '',
      editing : false,
      completed: true,
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
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input type='text' name='title' placeholder='title' value={this.state.title} onChange={this.handleChange} />
        <input type='text' name='conetent' placeholder='conetent' value={this.state.conetent} onChange={this.handleChange} />
        <button type='submit'> create expense </button>
      </form>
    );
  }
}

export default NoteForm;