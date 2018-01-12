import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard';
import Landing from '../landing';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>To Do List!</h1>
              <nav>
                <ul>
                  <li><Link to='/'> Home </Link></li>
                  <li><Link to='/dashboard'> Dashboard </Link></li>
                </ul>
              </nav>
            </header>
            <Route exact path='/' component={Landing} ></Route>
            <Route exact path='/dashboard' component={Dashboard} ></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;