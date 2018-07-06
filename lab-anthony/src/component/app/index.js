import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Dashboard from '../dashboard';
import Landing from '../landing';


class App extends React.Component{

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <header>
              <div className="todoTitleBody">
                <h1 className="todoListTitle"> todo4u</h1>
              </div>
              <nav>
                <ul className="navItems">
                  <li className="homelink"><Link to='/'>Home</Link></li>
                  <li className="dashboardlink"><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route exact path='/'component={Landing}/>
            <Route exact path='/dashboard' component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
