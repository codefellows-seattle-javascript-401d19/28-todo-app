import React from 'react'
import NoteItem from '../noteitem'

class NoteList extends React.Component {
  render() {
    return (
      <div className='note-list'>
        <h2> List of Notes </h2>
        <ul>
        {this.props.notes.map((note, ind) => (
          <NoteItem key={ind} note={note} /> 
        ))}
        </ul>
      </div>
    )
  }
}
export default NoteList
