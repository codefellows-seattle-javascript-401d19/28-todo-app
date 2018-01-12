import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from '../landing';
import Dashboard from '../dashboard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <header>
            <h1 id='title'>List of things to do</h1>
            <nav id='navbar'>
              <Link className='navitem button' id='nav-home' to='/'>Home</Link>
              <Link className='navitem button' id='nav-dash' to='/dashboard'>Dashboard</Link>
            </nav>
          </header>
          <Route exact path='/' component={Landing} />
          <Route exact path='/dashboard' component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
