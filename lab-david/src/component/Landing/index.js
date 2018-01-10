import React from 'react';

class Landing extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    }

    //-----------------------------------------
    // Binding Function
    //-----------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Landing.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //-----------------------------------------
  // Member Functions
  //-----------------------------------------

  //-----------------------------------------
  // Hooks
  //-----------------------------------------
  render(){

  

    return(
      <div className='landing'>
      <h1>This is the landing page. Todo stuff.</h1>
      </div>
    );

  }
}

export default Landing;