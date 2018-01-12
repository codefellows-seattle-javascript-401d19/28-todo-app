import React from 'react';

const emptyState = {
  content : '',
  title : '',
};

class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.notes.length > 0 ? this.props.notes : emptyState;

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
    // for (var i = 0; i < this.props.notes.length; i++) {
    //   let note = this.props.notes[i];
    //   if(note.editing !== 'false'){
    //     this.props.updateNote(note);
    //   }
    // }
    // this.props.addNote(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.note){
      this.setState(nextProps.note);
    }
  }

  render() {
    console.log(this);
    let buttonText = this.props.notes.length > 0 ? 'Update a Note' : 'Add A Note';
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
        <button onClick={this.onComplete}>{buttonText}</button>
      </form>
    );
  }
}

export default NoteForm;
