import React from 'react'
import styled from 'styled-components'
import { menuData } from './../data/MenuData';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FaTimes } from 'react-icons/fa';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #141A29;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '1' : '-100%')} ;
`
const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const CloseIcon = styled(FaTimes)`
    color: #fff;
`
const DropdownWrapper = styled.div`

`

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align:center;
    margin-bottom: 4rem;

    @media screen and (max-width: 400px){
        grid-template-rows: repeat(4,80px);
    }
`

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size:1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition:0.2s ease-in-out;

    &:hover{
        color:#000d1a;
    }
`
const BtnWrap= styled.div`
    display: flex;
    justify-content: center;
`


const Dropdown = ({isOpen, toggle}) => {

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
        <DropdownContainer isOpen = {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink key={index}  
                                        onClick={(e) => scrollSec(item.link, e)}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary = "true" round="true" big="true" style={{color:"black",backgroundColor:"white"}}
                    onClick={(e) => scrollSec("contact", e)}>Contact Us
                    </Button>
                </BtnWrap>
                
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
