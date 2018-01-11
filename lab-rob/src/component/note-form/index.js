import React from 'react';
import uuid from 'uuid';

import autoBind from '../../lib/auto-bind';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };

    autoBind(this, NoteForm);
  }

  // -----------------------------
  // Member's Only
  // -----------------------------

  handleChange(event) {
    let {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onComplete({
      id: uuid.v1(),
      editing: false,
      completed: false,
      content: event.target.content.value,
      title: event.target.title.value,
    });

    this.setState({
      title: '',
      content: '',
    });
  }

  // -----------------------------
  // Captain Hooks
  // -----------------------------

  render() {
    return (
      <div className='note-form'>
        <form onSubmit={this.handleSubmit}>
          <input name='title' value={this.state.title} placeholder='Title' onChange={this.handleChange} />
          <textarea cols='20' rows='20' name='content' placeholder='Note Content' value={this.state.content} onChange={this.handleChange} />
          <button type='submit'>Submit Note</button>
        </form>
      </div>
    );  
  }
}

export default NoteForm;