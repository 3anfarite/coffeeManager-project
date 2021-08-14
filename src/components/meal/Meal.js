import React from 'react'
import './meal.css'



const Meal = ({item}) => {

  return (
    <article className='menu-item'>
            {/* <img></img> */}
            <div className='item-info'>
              <header>
                <h4>{item.title}</h4>
                <h4 className='item-price'>${item.price}</h4>
              </header>
              <p className='item-text'>{item.description}</p>
            </div>
    </article>
  )
}

export default Meal
