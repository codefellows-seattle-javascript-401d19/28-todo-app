import React from 'react';

class Dashbord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
  }

  // Member's Only
  addNote(note) {
    this.setState(previousState => previousState.notes = [...previousState.notes, note]);
  }

  removeNote(id) {
    this.setState(previousState => previousState.notes = previousState.notes.filter(note => note.id !== id));
  }


  // Captain Hooks
  render() {
    return (
      <div className="dashboard">
        <h2>Hi I Dashy-B!</h2>
      </div>
    );
  }
}

export default Dashbord;