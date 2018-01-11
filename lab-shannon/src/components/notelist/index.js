import React from 'react';
import NoteItem from '../noteitem';

class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.notes.map((note, index) => {
          return (
            <li key={index}>
              <NoteItem notes={this.props.notes} index={index} removeNote={this.props.removeNote} showEditView={this.props.showEditView}/>
            </li>
          );
        })}
      </ul>
    );
  }
}


export default NoteList;
