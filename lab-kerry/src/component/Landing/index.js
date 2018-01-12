import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';
import NoteItem from '../note-item';
import uuid from 'uuid';

class Landing extends React.Component {
 
  render() {
    return (
      <div className='landing'>
        <h1>Where am I?</h1>
        <p>Go to your notebook and add some messages.</p>

      </div>
    );
  }
}

export default Landing;