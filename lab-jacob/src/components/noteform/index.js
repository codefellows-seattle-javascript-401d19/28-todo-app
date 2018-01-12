import React, { Component } from 'react'
import uuidV1 from 'uuid/v1'

export default class NoteForm extends React{
  constructor(props) {
    super(props);
    this.state{
      id: uuidv1(),
      title: '',
      content: '',
      editing: false,
      complete: false,
    }
    
    this.handleChange = this.handleChange.bind(this)
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
