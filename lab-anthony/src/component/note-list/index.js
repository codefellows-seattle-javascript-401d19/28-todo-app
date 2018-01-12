import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.notes.map(note => {
            return(
              <li className="oneNote" key={note.id}>
                <NoteItem
                  note={note}
                  handleRemoveNote={this.props.handleRemoveNote}
                  handleUpdateNote={this.props.handleUpdateNote}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}



export default NoteList;
