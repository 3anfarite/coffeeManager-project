import React, {useState} from "react";
import {BrowserRouter as Router , Switch, Route, Link, Redirect} from 'react-router-dom';
import { Component } from "react";

import MainPage from './pages/MainPage';
import Shop from './pages/Shop';


class App extends Component {
  render(){

  return(
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route  path="/shop" component={Shop}/>
      </Switch>
    </Router>
    ) 
}
}
export default App;





