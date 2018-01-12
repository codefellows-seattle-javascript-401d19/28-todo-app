import React from 'react'
import NoteForm from '../noteform'
import NoteList from '../notelist'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
    
  }
  
  addNote(note){
    let noteState = this.state.notes

    note.editing
  }
}