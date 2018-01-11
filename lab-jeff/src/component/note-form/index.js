import React from 'react';

let emptyState = {
  title: '',
  content: '',
};

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.expense ? this.props.expense : emptyState;

    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.handleComplete(this.state);
    this.setState({
      title: '',
      content: '',
    });
  }

  handleChange(event) {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.note) this.setState(nextProps.note);
  }
  render() {
    let buttonText = this.props.note ? 'Update' : 'Create';
    return (
      <form className="note-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <textarea
          rows="20"
          cols="50"
          type="text"
          name="content"
          placeholder="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

export default NoteForm;
