import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Meal from './Meal';
import './meal.css'


const Border = styled.div`
    width: 120px;
    height: 3px;
    background: black;
    margin: 40px auto;
`

const Menu = () => {
    const {mealList: list} = useSelector(state => state.meals)

    return (
        <div className="menu-section">
            <h3>My Menu</h3>
            <Border/>
            {list.length ? (
                list.map((item) => <Meal item = {item}/>)
            ) : 
            <div>no meals were added</div>}
        </div>
    )
}

export default Menu
