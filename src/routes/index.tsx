import React, { Suspense, lazy }  from 'react';
import {BrowserRouter as 
  Router, 
  Route, 
  Switch, 
  Redirect,
  Link} from "react-router-dom";
import './index.css';

  
import Home from '../pages/Home'
import About from '../pages/About'
import Test from '../pages/Test'
import Navbar from '../header/Navbar'


function Routes() {
  return (
    <Router> {/*<-- */}
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/about" component={About} />
          <Route 
            exact path="/test" 
            render={(props)=> (<Test {...props} name="luke" age={30} admin={true}/>)}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;