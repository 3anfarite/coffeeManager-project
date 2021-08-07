import React from 'react'

import {BrowserRouter as Router , Switch, Route, Link, Redirect} from 'react-router-dom';

import Menu from '../components/menu/Menu'
import TopNav from '../components/topnav/TopNav';


import '../styles/shop.css'

const Shop= () => {
    return (
        <>
        <TopNav/>
        <Menu/>
        </>
    )
}

export default Shop
