import React from 'react';

import NoteForm from '../note-form';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <h2>Welcome!</h2>
        <p>Please enjoy this app! Create trouble-free todo lists at the pace of <em>you</em>!</p>
        <NoteForm />
      </div>
    );
  }
}

export default Landing;