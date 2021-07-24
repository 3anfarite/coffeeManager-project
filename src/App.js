import React, {useState} from "react";
import {BrowserRouter as Router , Switch, Route, Link, Redirect} from 'react-router-dom';

import MainPage from './pages/MainPage';
import { Component } from "react";


class App extends Component {
  render(){

  return <Router>
      <Switch>
        <Route  path="/" component={MainPage}/>
      </Switch>
    </Router>

}
}
export default App;





