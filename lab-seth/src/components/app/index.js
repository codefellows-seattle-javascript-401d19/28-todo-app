import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Dashboard from '../dashboard';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1> To Do Checklist </h1>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/dashboard'>dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route exact path='/' component={() => <h1> Welcome to the Home page for our Basic To Do list App! </h1>} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;