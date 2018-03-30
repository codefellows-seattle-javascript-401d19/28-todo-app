import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <p>Welcome to the Todo List Application! This is a frontend application where you can create your own Todo List. To start, please click on Dashboard from the navigation bar. 
          <br></br>
          <br></br>          
        Once you have completed your task, simply delete it from your list.</p>
        <br></br>
        <br></br>

        <h2 className='github'>Catherine Looper<a href='https://github.com/ccloops' target='blank'><img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'/></a></h2>
      </div>
    );
  }
}

export default Landing;