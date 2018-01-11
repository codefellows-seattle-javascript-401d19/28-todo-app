import React from 'react';


class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };
    //...............................................................
    /* Binding Handlers */
    //...............................................................

    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  //...............................................................
  /* Member Functions -- these you call yourself */
  //...............................................................

  handleSubmit(event) {
    event.preventDefault();

    this.props.handleComplete(this.state);
    this.setState({
      title: '',
	  content: '',
    });
  }

  handleChange(event) {
    let { name, value, type } = event.target;

    this.setState({
      //This ES6 syntax updates the field based on its name.  Name is replaced by the field name and the value is the input.
      [name]: value,

    });
  }

  //...............................................................
  /* Hooks - these React will call for you */
  //...............................................................

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br/>
        <textarea
          type='text'
          cols='60'
          rows='10'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <br/>
        <button type='submit'>Create New Note</button>
      </form>
    );
  }
}

export default NoteForm;