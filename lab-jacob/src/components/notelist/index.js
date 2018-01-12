import React, { Component } from 'react'
import NoteItem from '../noteitem'
export default class NoteList extends React {
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
