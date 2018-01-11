import React from 'react';

class NoteItem extends React.Component {
  constructor(props){
    super(props);

    this.removeNote = this.removeNote.bind(this);
  }

  removeNote(event) {
    console.log(event.target.id);
    //filter out the element that has a matching id and return all the others as a new array
  }

  render() {
    return(
      <div>
        <p>title: {this.props.notes[this.props.index].title}</p>
        <p>note: {this.props.notes[this.props.index].content}</p>
        <p>id: {this.props.notes[this.props.index].id}</p>
        <p>editing: {this.props.notes[this.props.index].editing}</p>
        <p>completed: {this.props.notes[this.props.index].completed}</p>
        <button onClick={this.removeNote}>Remove Note</button>
      </div>
    );
  }
}

export default NoteItem;
