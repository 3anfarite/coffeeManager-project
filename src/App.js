import React, {useState} from "react";
import Hero from "./components/Hero";

import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router , Switch, Route, Link, Redirect} from 'react-router-dom';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Services from "./components/Services";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
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





