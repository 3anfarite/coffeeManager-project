import React from 'react'


import TopNav from '../components/topnav/TopNav';


import '../styles/shop.css'
import MealForm from '../components/mealForm/MealForm';
import Menu from '../components/meal/Menu';

const Shop= () => {
    return (
        <>
        <TopNav/>
        <MealForm/>
        <Menu/>
        </>
    )
}

export default Shop
