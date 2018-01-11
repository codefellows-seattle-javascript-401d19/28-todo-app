import React from 'react';

class NoteItem extends React.Component{

  //-----------------------------------------
  // Member functions 
  //-----------------------------------------
  // handleSubmit(event){
  //   event.preventDefault();

  //   this.props.handleAddNote(this.state);
  //   this.setState({
  //     title : '',
  //     content : '',
  //   });

  //   handleDelete(event){
  
  //     if(this.props.state.item ===);
  //     this.setState({
  //       title : '',
  //       content : '',
  //     });


  // }


  //-----------------------------------------
  // Hooks
  //-----------------------------------------

  render(){
    let { id, title, content } = this.props.note;
    return(
      <div>
        <h2>Note title : {title}</h2>
        <p>Note content : {content}</p>
        <button type="click" onClick={() => { this.props.handleRemoveNote(this.props.note);
        }}> Delete
        </button>
      </div>
    );
  }


}

export default NoteItem;