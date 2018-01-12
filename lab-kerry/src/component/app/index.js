import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Landing from '../Landing';
import Dashboard from '../Dashboard';

class App extends React.Component {
  render () {
    return (
      <div className = 'app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>Note Float</h1>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/dashboard'>Notebook</Link></li>
                </ul>
              </nav>
            </header>
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;