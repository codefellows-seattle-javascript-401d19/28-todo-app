import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Dashboard from '../Dashboard';

class App extends React.Component {
  render () {
    return (
      <div className = 'app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>Just checking...</h1>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route exact path='/' component={() => <h1>I am a landing page.</h1>} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;