import React from 'react';

class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    }

    //-----------------------------------------
    // Binding Function
    //-----------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
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
      <div className='dashboard'>
      <h1>This is the dashboard page..</h1>
      </div>
    );

  }
}

export default Dashboard;