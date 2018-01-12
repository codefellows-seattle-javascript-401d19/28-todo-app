import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Landing from '../landing';
import Dashboard from '../dashboard';
import './app.scss';

class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>Welcome to Your To Do List</h1>
            </header>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
              </ul>
            </nav>
            <Route exact path = '/' component={Landing}/>
            <Route exact path = '/dashboard' component={Dashboard}/>
            <footer>
              <p>Copyright 2018</p>
            </footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
