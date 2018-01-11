import React from "react";

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    }
  }

  render() {
    return (
      <form className='note-item'>
        <input 
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          />
        <input
          type='number'
          name='price'
          placeholder='price'
          step='any'
          value={this.state.price}
        />
        <button type='submit' onClick={this.removeNote}> remove note </button>
      </form>
    )
  }
}

export default NoteItem;
