import React from 'react';

class NoteItem extends React.Component {

  //...............................................................
  /* Hooks - these React will call for you */
  //...............................................................
  render() {
    let { id, title, content} = this.props.note;
    return (
      <div className='Note'>
        <li className ='single-note'> {title}: {content}</li>
        <button onClick={() => this.props.handleRemoveNote(this.props.note)}>Delete</button>
      </div>
    );
  } 
}

export default NoteItem;