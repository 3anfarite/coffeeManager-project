import React from 'react'
import arrow from '../images/arrow.png'
import styled from 'styled-components'

const Up = styled.div`
    position: fixed;
    right:3.5rem;
    bottom: 4rem;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.65);

    img{
        width: 3rem;
        height: 3rem;
        background-color:#fff ;
        border-radius: 50%;
        border: 2px solid #fff;
        transition: transform 0.3s;
    
    &:hover{
        transform: scale(1.25);
    }
    &:active{
        transform:scale(0.9);
    }
}
    @media screen and (max-width:550px){
        display:none;
    }

`

const ScrollToTop = () => {

    const ScrollUp = () =>{
        const element = document.getElementById("home")
        element.scrollIntoView({
            behavior:"smooth",
            block:"end",
            inline:"nearest"
        })
    }

    return <Up onClick={ ScrollUp }>
        <img src={arrow} alt="to top" />
    </Up>
}

export default ScrollToTop
