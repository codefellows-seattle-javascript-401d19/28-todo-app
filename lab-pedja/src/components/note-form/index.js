import React from "react";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    //------------------------------------------
    // Binding Handlers
    //------------------------------------------
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
  handleChange(event){
    let {name,value} = event.target;

    this.setState({
      [name] : value
    });
  }

  //------------------------------------------
  // Hooks
  //------------------------------------------
  render() {
    return(
      <form className='note-form' onComplete={this.addNote}>
        <input 
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
          />
        <input
          type='type'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>create note</button>
      </form>
    );
  }
}

export default NoteForm;