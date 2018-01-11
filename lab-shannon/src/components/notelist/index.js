import React from 'react';
import NoteItem from '../noteitem';

class NoteList extends React.Component {
  constructor(props){
    super(props);

    this.createList = this.createList.bind(this);
  }

  createList() {
    console.log(this.props);
    // this.state.notes.map((note, index) => {
    //   return <li key={index}>note</li>;
    // });
  }

  render() {
    return (
      <ul>
        <NoteItem />
      </ul>
    );
  }
}

export default NoteList;
