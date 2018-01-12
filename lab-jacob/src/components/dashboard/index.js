import React from 'react'
import NoteForm from '../noteform'
import NoteList from '../notelist'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
    
  }
  
  addNote(note){
    this.state.notes

    note.editing = false
    note.complete = true

    this.setState({notes: [...this.state.notes, note]})
  }

  removeNote(key){
    const newNoteState = this.state.notes.filter(note =>{
      return note.id !== key
    })
    this.setState({ notes: [...newNoteState]})
  }

  render(){
    return(
      <div>
      <NoteForm onComplete={this.addNote}/>
      <NoteList onRemove={this.removeNote} notes={this.state.notes}/>
      </div>
    )
  }
}