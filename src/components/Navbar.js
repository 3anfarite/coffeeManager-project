import React , { useState, Fragment} from 'react'
import styled, {css} from 'styled-components/macro'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import { FaCoffee } from 'react-icons/fa'
import '../styles/Navbar.css'


const Nav = styled.nav`
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index:100;
    position:fixed;
    width:100%;
    background: transparent;
`

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    cursor: pointer;
    height: 100%;
    text-decoration:none;
    font-weight: 450;
    font-size: 20px;

    &:hover{
        background-color: #40798C;
        height: 55px;
    }
`

const Logo = styled(Link)`
    text-decoration: none;
    color: #fff;  
    font-family :'Raleway', sans-serif ;
    font-size: 2rem;
`
const MenuBars = styled(FaCoffee)`
    display: none;
    color: #fff;

    @media screen and (max-width: 668px){
        display: block;
        background-size: contain;
        height: 45px;
        width: 35px;
        cursor: pointer;
        top: 0;
        right: 0;
        position: absolute;
        transform: translate(-80%, 40%);
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right:-48px;

    @media screen and (max-width: 668px){
        display: none;
    }
`

const NavMenuLinks = styled(Link)`
    ${NavLink}
`

const NavBtn = styled.div`
    display:flex;
    align-items: center;
    margin-right: 24px;


    @media screen and (max-width: 668px){
        display: none;
    }
`

const Navbar = ({toggle}) => {
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () =>{
        if(window.scrollY >= 100){
          setColorchange(true);
        }
        else{
          setColorchange(false);
        }
     };
    window.addEventListener('scroll', changeNavbarColor);

    const scrollSec = (id, e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      };
    
    
        
    return (
        <Fragment>
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <Logo onClick={(e) => scrollSec("home", e)}>Coffee</Logo>
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item, index)=>(
                        <NavMenuLinks key = {index}
                                    onClick={(e) => scrollSec(item.link, e)}>
                            {item.title }
                        </NavMenuLinks>
                    
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button 
                              primary="true" 
                            style={{color:"black",backgroundColor:"white"}}
                            onClick={(e) => scrollSec("contact", e)}>
                                Contact Us
                    </Button>
                    
                </NavBtn>
            </Nav>
        </Fragment>
        
    )
}

export default Navbar
