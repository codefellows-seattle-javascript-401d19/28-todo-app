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
    this.completeNote = this.completeNote.bind(this);
  }

  handleChange(event){
    let {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  completeNote(event){
    event.preventDefault();
    this.props.completeNote(this.state);
    this.setState({title: '', content: ''});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.note){
      this.setState(nextProps.note);
    }
  }

  render(){
    let buttonText = this.props.note ? 'Update Note!' : 'Add Note!';
    return (
      <form onSubmit={this.completeNote}>
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
          name='content'
          cols='40'
          rows='10'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <br/>
        <input
          className='submit-button'
          type='submit'
          value={buttonText}
        />
      </form>
    );
  }
}

export default NoteForm;