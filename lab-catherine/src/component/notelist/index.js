import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    let memberFunctions = Object.getOwnPropertyNames(NoteList.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleNoteList() {
    return this.props.notes.map((note, index) => {
      return (
        <li key={index}>   
          <p>Title: {note.title}</p>
          <p> Content: {note.content}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        {this.handleNoteList()}
      </div>
    );
  }
}

export default NoteList;
