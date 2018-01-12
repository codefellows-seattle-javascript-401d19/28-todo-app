import React from 'react';
import NoteItem from '../noteitem';

class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.notes.map((note, index) => {
          return (
            <li key={index}>
              <NoteItem notes={this.props.notes} index={index} removeNote={this.props.removeNote} updateNote={this.props.updateNote} handleEditView={this.props.handleEditView}/>
            </li>
          );
        })}
      </ul>
    );
  }
}


export default NoteList;
