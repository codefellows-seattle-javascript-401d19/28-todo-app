import React from "react";

let emptyState = {
  title: '',
  content: '',
}

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.note ? this.props.note : emptyState;

    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //------------------------------------------
  // Member Functions
  //------------------------------------------
  handleSubmit(event){
    event.preventDefault();

    this.props.handleComplete(this.state);
    this.setState({
      title : '',
      content : ''
    });
  }
  
  handleChange(event){
    let {name,value} = event.target;

    this.setState({
      [name] : value
    });
  }

  //------------------------------------------
  // Hooks
  //------------------------------------------

  componentWillReceiveProps(nextProps) {
    if(nextProps.note)
      this.setState(nextProps.note);
  }

  render() {
    let buttonText = this.props.note ? 'Update' : 'Create';
    return(
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
          />
        <textarea
          type='type'
          cols='30'
          rows='5'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText}</button>
      </form>
    );
  }
}

export default NoteForm;