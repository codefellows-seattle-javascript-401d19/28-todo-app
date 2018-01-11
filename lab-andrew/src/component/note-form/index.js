import React from 'react';

class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  handleChange(event){
    let {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  addNote(event){
    event.preventDefault();
    this.props.newNote(this.state.title, this.state.content);
    this.setState({title: '', content: ''});
  }

  render(){
    return (
      <form onSubmit={this.addNote}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <input
          type='submit'
          value='Add Note!'
        />
      </form>
    );
  }
}

export default NoteForm;