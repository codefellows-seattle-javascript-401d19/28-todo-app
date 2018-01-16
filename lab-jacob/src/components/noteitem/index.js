import React from 'react'


class NoteItem extends React.Component {
  render(){
    const {id, title, content} = this.props.note
    return (
        <div>
          <p>Title: {title}</p>
          <p>Content: {content}</p>
          <button 
            type='button'
            onClick={this.props.handleRemove().bind(null,this.props.note)}
          
          >Delete</button>
        </div>
     )
   } 
}

export default NoteItem