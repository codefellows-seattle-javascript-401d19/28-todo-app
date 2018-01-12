import React, { Component } from 'react';

const emptyState = {
  title: '',
  content: '',
};

class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.note ? this.props.note : emptyState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      editing: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onComplete(this.state);

    this.setState({
      title: '',
      content: '',
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.note) {
      this.setState(nextProps.note);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='title'
            placeholder='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <input
            type='text'
            name='content'
            placeholder='content'
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br />
          <button type='submit'>Publish Note</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
