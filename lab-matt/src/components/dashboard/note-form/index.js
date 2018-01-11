import React from 'react';
import { notEqual } from 'assert';
const autoBind = require('../../auto-bind/index');

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      title: '',
      content: '',
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: '',
      content: '',
    });
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name] : value });
  }

  render() {
    return (
      <div>
        <form className='note-form' onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleChange} 
            name='title' 
            value={this.state.title} 
            placeholder='Title'
          />
          <textarea 
            onChange={this.handleChange} 
            name='content' 
            value ={this.state.content} 
            placeholder='Body Goes Here'
          ></textarea>
          <button type='submit'>Create Note</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;