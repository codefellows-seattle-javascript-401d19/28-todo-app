import React from 'react';
import Dashboard from '../dashboard';

class Landing extends React.Component{
 
  render(){
    return(
      <div className='landing'>
            <header>
              <h1>This is the landing page. Todo stuff.</h1>
              <p> This app lets you save notes, and see your list of notes. Please note Notes will not persist when you leave the site though.
              </p>
            </header>
      </div>
    );
  }
}

export default Landing;