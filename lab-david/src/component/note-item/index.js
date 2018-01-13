import React from 'react';

class NoteItem extends React.Component{

  //-----------------------------------------
  // Hooks
  //-----------------------------------------

  render(){
    let { id, title, content } = this.props.note;
    let {handleRemoveNote} = this.props;

    return(
      <div className="note-item">
        <h2>Note title : {title}</h2>
        <p>Note content : {content}</p>
        <button type="click" onClick={ this.props.handleRemoveNote.bind(null, this.props.note)
        }> Delete
        </button>
        
      </div>
    );
  }


}

export default NoteItem;