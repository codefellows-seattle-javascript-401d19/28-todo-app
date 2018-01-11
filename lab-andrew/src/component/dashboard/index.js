import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';
import uuid from 'uuid';


class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: [],
    };
  }

  addNote(title, content, editing = false, completed = false){
    let note = {title, content, editing, completed, id: uuid.v1()};
    this.setState(previousState => {[...previousState.notes, note];});
  }



  render() {
    return (
      <main>
        <h2>Dashboard</h2>
        <NoteForm newNote={this.addNote}/>
        <NoteList />
      </main>
    );
  }
}

export default Dashboard;