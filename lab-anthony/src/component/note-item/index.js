import React from 'react';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.content}</h3>
        <button onClick={this.props.handleRemoveNote}>delete note</button>
      </div>
    );
  }
}

export default NoteItem;
