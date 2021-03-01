import React, { Suspense, lazy }  from 'react';
import {BrowserRouter as 
  Router, 
  Route, 
  Switch, 
  Redirect,
  Link} from "react-router-dom";
import './index.css';

import '../assets/fonts/Raleway-Regular.ttf';
import '../assets/fonts/Raleway-SemiBold.ttf';
  
import Home from '../pages/Home'
import About from '../pages/About'
import Test from '../pages/Test'
import Navbar from '../header/Navbar'
import Footer from '../footer/Footer'
import Page404 from '../pages/404'
import LandPage from '../pages/Landpage'
import Login from '../pages/Login'
import Subscription from '../pages/Subscription'


function Routes() {
  return (
    <Router> {/*<-- */}
      <Navbar />
      <div className="contentAll">
        <Switch>
          <Route exact path="/"  component={LandPage} />
          <Route exact path="/home"  component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/404" component={Page404} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/subscription" component={Subscription} />
          <Route 
            exact path="/test" 
            render={(props)=> (<Test {...props} name="luke" age={30} admin={true}/>)}
          />
          <Redirect to="/404" />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default Routes;