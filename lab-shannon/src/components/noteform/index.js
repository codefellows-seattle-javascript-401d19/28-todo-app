import React from 'react';

const emptyState = {
  content : '',
  title : '',
};

class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.note ? this.props.note : emptyState;

    this.onComplete = this.onComplete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  onComplete(event) {
    event.preventDefault();
    this.props.handleComplete(this.state);
    this.setState({
      title: '',
      content: '',
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.note){
      this.setState(nextProps.note);
    }
  }

  render() {
    let buttonText = this.props.note ? 'Update a Note' : 'Add Note';
    return (
      <form className='note-form' onSubmit={this.onComplete}>
        <input
          value={this.state.title}
          type='text'
          name='title'
          placeholder='title'
          onChange={this.handleChange}
        />
        <br />
        <input
          value={this.state.content}
          type='text'
          name='content'
          placeholder='note'
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText}</button>
      </form>
    );
  }
}

export default NoteForm;
