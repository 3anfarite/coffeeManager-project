import React, {useState} from "react";
import Hero from "./components/Hero";

import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import GlobalStyle from './globalStyles'
import {Switch, Route} from './reportWebVitals';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Services from "./components/Services";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
   

 

  return (
    <>
      <GlobalStyle/>
      {/* <NavMenu/> */}
      <Navbar toggle = {toggle} style ={{overflowY:"scroll"}}/>
      <Dropdown isOpen = {isOpen} toggle = {toggle}/> 
      <Hero/>
      <Services />
      <Pricing/>
      <Features/> 
      <Contact />
      <About />
      <Footer/>
      <ScrollToTop/>
    </>

  );
}

export default App;





