
import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <p>Welcome to the Todo List Application! This is a frontend application where you can create your own Todo List. To start, please click on Dashboard from the navigation bar. 
          <br></br>         
        Once you have completed your task, you can delete it from your list.</p>
        <br></br>

        <h2 className='github'>By:Dalton Carr</h2>
      </div>
    );
  }
}

export default Landing;