import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>Welcome to Your To Do List</h1>
            </header>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
            </ul>
            <Route exact path = '/' component={() => <h1>hi</h1>}/>
            <Route exact path = '/dashboard' component={() => <h1>bye</h1>}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
