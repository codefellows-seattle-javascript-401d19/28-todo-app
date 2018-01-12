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
  
  }
  
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name=''
        
        />
      </form>
        
      </div>
    )
  }
}
