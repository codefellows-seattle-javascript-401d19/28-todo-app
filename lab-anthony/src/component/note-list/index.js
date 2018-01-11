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
              <li key={note.id}>
                <NoteItem
                  title={note.title}
                  content={note.content}
                  handleRemoveNote={this.props.handleRemoveNote.bind(null, note)}/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}



export default NoteList;
