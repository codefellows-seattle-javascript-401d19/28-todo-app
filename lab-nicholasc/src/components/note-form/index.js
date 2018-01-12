import React from 'react';

class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title : '',
      content : '',
    };

    //====================
    // Binding Handler from Vinicio
    //====================
    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //==========================
  //Member Functions
  //==========================

  handleSubmit(event) {
    event.preventDefault();

    this.props.handleComplete(this.state);
    this.setState({
      title : '',
      content : '',
    });
  }

  handleChange(event) {
    let {name, value} = event.target;
    this.setState({
      [name] : value,
    });
  }

  //================================
  //hooks
  //================================
  render() {
    return(
      <form className="note-form" onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange} />
        <input type="text" name="content" placeholder="content" step="any" value={this.state.content} onChange={this.handleChange} />
        <button type="submit">Create Note</button>
      </form>
    );
  }
}

export default NoteForm;
