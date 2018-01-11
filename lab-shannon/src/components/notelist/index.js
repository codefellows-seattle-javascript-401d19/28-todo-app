import React from 'react';
import NoteItem from '../noteitem';

class NoteList extends React.Component {
  constructor(props){
    super(props);

    this.createList = this.createList.bind(this);
    // this.updateList = this.updateList.bind(this);
  }
  //
  // updateList(remainingNotes) {
  //   this.props.removeNote(remainingNotes);
  // }

  createList() {
    return this.props.notes.map((note, index) => {
      return (
        <li key={index}>
          <NoteItem notes={this.props.notes} index={index} removeNote={this.props.removeNote}/>
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.createList()}
      </ul>
    );
  }
}


export default NoteList;
