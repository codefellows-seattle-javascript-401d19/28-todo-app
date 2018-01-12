import React, { Component } from 'react'
import uuidV1 from 'uuid/v1'

export default class NoteForm extends React{
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv1(),
      title: '',
      content: '',
      editing: false,
      complete: false,
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const {id, title, content, editing, complete} = this.state
    const note = {id, title, content, editing, complete}
    this.props.onComplete(note)

    this.setState({
      id: uuidV1(),
      title: '',
      content: '',
      complete: false,
    })
  }
  
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          name='title'
          placeholder='Title Here'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <div></div>
        <input 
          type='text'
          name='content'
          placeholder='Description/Content Here'
          value={this.state.content}
          onChange={this.handleChange}
        />
      </form>
      <button type='submit'>Submit Note</button> 
      </div>
    )
  }
}
