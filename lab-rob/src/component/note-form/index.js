import React from 'react';

import autoBind from '../../lib/auto-bind';

let emptyState = {
  title: '',
  content: '',
};
class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.note ? this.props.note : emptyState;

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

    this.props.handleComplete(this.state);

    this.setState({
      title: '',
      content: '',
    });
  }

  // -----------------------------
  // Captain Hooks
  // -----------------------------

  componentWillReceiveProps(nextProps) {
    if(nextProps.note)
      this.setState(nextProps.note);
  }

  render() {
    let submitText = this.props.note ? 'Update' : 'Add';

    return (
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input type='text' name='title' placeholder='Title' value={this.state.title} onChange={this.handleChange} />
        <textarea cols='20' rows='20' name='content' placeholder='Type your note here...' value={this.state.content} onChange={this.handleChange} />
        <button type='submit'>{submitText}</button>
      </form>
    );  
  }
}

export default NoteForm;