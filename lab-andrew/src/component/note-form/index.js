import React from 'react';

const emptyState = {
  title: '',
  content: '',
};

class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.note ? this.props.note : emptyState;

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.note)
      this.setState(nextProps.note);
  }

  render(){
    let buttonText = this.props.note ? 'Update Note!' : 'Add Note!';
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
          value={buttonText}
        />
      </form>
    );
  }
}

export default NoteForm;