import React, { Component } from 'react'


 export default class NoteItem extends React {
  render(){
    const {id, title, content} = this.props.note
    return (
        <div>
          <p>Title: {title}</p>
          <p>Content: {content}</p>
          <button onClick={this.props.handleRemove().bind(null,this.props.note)}
          type='button'
          >Delete</button>
        </div>
     )
   } 
}
