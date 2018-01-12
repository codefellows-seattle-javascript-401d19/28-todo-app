import React from 'react';
import { notEqual } from 'assert';

let emptyState = {
  title: '',
  content: '',
};

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.note ? this.props.note : emptyState;


    this.handleSubmit = (event) => {
      event.preventDefault();
      this.props.handleNote(this.state);
      this.setState({
        title: '',
        content: '',
      });
    };
  
    this.handleChange = (event) => {
      let { name, value } = event.target;
      this.setState({ [name] : value });
    };
  }

  componentWillReceiveProps(props) {
    if (props.note) {
      this.setState(props.note);
    }
  }

  render() {
    let submitText = this.props.note ? 'Update Note' : 'Add Note';
    
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
          <button type='submit'> {submitText} </button>
        </form>
      </div>
    );
  }
}

export default NoteForm;