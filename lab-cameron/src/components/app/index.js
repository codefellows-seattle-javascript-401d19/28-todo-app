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
            <h1>To Do App</h1>
            <nav>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
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
