import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Dashboard from "../dashboard";
import Landing from "../landing";

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className='container'>
            <header>
              <h1>TODO tracker</h1>
              <nav className='vertical-nav'>
                <ul>
                  <li><a><Link to='/'>Home</Link></a></li>
                  <li><a><Link to='/dashboard'>Dashboard</Link></a></li>
                </ul>
              </nav>
            </header>
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
