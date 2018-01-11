import React from 'react';

class NoteItem extends React.Component {
  constructor(props){
    super(props);

    this.removeNote = this.removeNote.bind(this);
  }

  removeNote(event) {
    const remainingNotes = this.props.notes.filter(note => {
      if(note.id !== event.target.id){
        return note;
      }
    });
    this.setState(this.props.updateList(remainingNotes));
  }

  render() {
    return(
      <div>
        <p>title: {this.props.notes[this.props.index].title}</p>
        <p>note: {this.props.notes[this.props.index].content}</p>
        <p>id: {this.props.notes[this.props.index].id}</p>
        <p>editing: {this.props.notes[this.props.index].editing}</p>
        <p>completed: {this.props.notes[this.props.index].completed}</p>
        <button id={this.props.notes[this.props.index].id} onClick={this.removeNote}>Remove Note</button>
      </div>
    );
  }
}

export default NoteItem;
