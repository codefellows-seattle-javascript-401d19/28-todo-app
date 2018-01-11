import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';
import NoteItem from '../note-item';
import uuid from 'uuid';

class Landing extends React.Component {
 
  render() {
    return (
      <div className='landing'>
        <h1>My Notes!</h1>
        <p>Go to your dashboard and start adding notes!</p>

      </div>
    );
  }
}

export default Landing;