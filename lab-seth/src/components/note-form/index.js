import React from 'react';
const uuidv1 = require ('uuid/v1');
import uuid from 'uuid';

let newState = {
  title: '',
  content: '',
  editing: true,
  completed: false,
};


class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.note ? this.props.note : newState;

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

    this.props.onComplete(this.state);
    this.setState({
      title: '',
      content :'',
    });
    // this.props.onComplete({
    //   id: uuidv1(),
    //   title : event.target.title.value,
    //   content : event.target.content.value,
    //   editing : false,
    //   completed: true,
    // });
  }

  handleChange(event){
    let {name, value} = event.target;

    this.setState({
      [name] : value,
    });
  }

  //=======================================================
  // Hooks

  componentWillReceiveProps(nextProps){
    if(nextProps.note)
      this.setState(nextProps.note);
  }

  render(){
    let buttonText = this.props.note ? 'Update' : 'Add';
    return(
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input type='text' name='title' placeholder='title' value={this.state.title} onChange={this.handleChange} />
        <input type='text' name='content' placeholder='content' value={this.state.content} onChange={this.handleChange} />
        <button type='submit'>{buttonText}</button>
      </form>
    );
  }
}

export default NoteForm;