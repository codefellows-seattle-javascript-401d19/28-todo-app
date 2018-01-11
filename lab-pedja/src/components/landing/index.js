import React from "react";

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <h2>TODO Tracker</h2>
        <p>
          TODO Tracker is a simple react app that lists everything that you have to do. By keeping such a list, you make sure that your tasks are written down all in one place so you don't forget anything important. 
        </p>
        <p>
          Click on DASHBOARD and start adding your tasks. Delete it once task is completed. 
        </p>
      </div>
    )
  }
}

export default Landing;