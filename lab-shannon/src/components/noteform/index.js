import React from 'react';

class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      content : '',
      title : '',
    };

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
    this.setState(this.props.addNote(this.state.title, this.state.content));
  }

  render() {
    return (
      <form>
        <input
          value={this.state.title}
          type="text"
          name="title"
          placeholder="title"
          onChange={this.handleChange}
        />
        <br />
        <input
          value={this.state.content}
          type="text"
          name="content"
          placeholder="note"
          onChange={this.handleChange}
        />
        <button onClick={this.onComplete}>Add Note</button>
      </form>
    );
  }
}

export default NoteForm;
