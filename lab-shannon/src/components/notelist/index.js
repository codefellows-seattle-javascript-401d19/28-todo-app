import React from 'react';
import NoteItem from '../noteitem';

class NoteList extends React.Component {
  constructor(props){
    super(props);

    this.createList = this.createList.bind(this);
  }

  createList() {
    return this.props.notes.map((note, index) => {
      return (
        <li key={index}>
          <NoteItem notes={this.props.notes} index={index}/>
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
