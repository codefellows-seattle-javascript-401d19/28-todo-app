import React from 'react';
import autoBind from '../../lib/auto-binder';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };

    autoBind(this, NoteForm);
  }

  handleChange(event) {
    let {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className='noteForm'>
        <input name='title' value={this.state.title} placeholder='Title' onChange={this.handleChange} />
        <textarea cols='20' rows='20' name='content' placeholder='Note Content' value={this.state.content} onChange={this.handleChange} />
      </form>
    );  
  }
}

export default NoteForm;