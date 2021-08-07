import React ,{useState}from 'react'
import styled ,{ css }from 'styled-components/macro'
import bg from '../images/Cafe.jpg'
import ModalLogin from './ModalLogin';
import '../styles/Hero.css'
import ModalRegister from './ModalRegister';
import VideoModal from './VideoModal';
import { Link } from 'react-router-dom';



const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`

const HeroContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background-position: center ;
    background-size: cover;
    background-image: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2)),
    url(${bg});
    background-repeat: no-repeat;
`


const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    position: relative;
`

const Left = styled.div`
    padding-left: 6rem;
    width: 100%;

    @media (max-width:670px){
        width: 100%;
        padding-left: 1rem;
    }
`

const BtnPopup = styled(Link)`
  height: 70px;
  text-align: center;
  width: 250px;
  align-items: center;
  display: flex;
  border-radius:40px;
  background: rgba(0,0,0, 0.3);
  color: #fff;
  letter-spacing:1px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration:none;
  justify-content: center;
  border: 2px solid ;


  @media (max-width:670px){
    width: 170px;
    }


  &:hover {
    background: transparent;
    border: 2px solid ;
    box-shadow: 0 1px 10px 0 ;
    opacity:4;
  }
    
`
const BtnWrapper = styled.div`
    position: absolute;
    top: 65%;
    left: 43%;
    transform: translateY(130%);

    @media (max-width:340px){
        top: 49%;
        left: 29.5%;
        height: 190px;
    }
    
`



const Hero = () => {

    const [isShown, setIsShown] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isVideo, setIsVideo] = useState(false)
    
 
    return (

        <HeroContainer id="home">
            
        <HeroSection>

            <HeroWrapper>               
            <Left>
            <ModalLogin show = {isShown} onClose={()=>setIsShown(false)}>Login</ModalLogin>
            <ModalRegister open = {isOpen} onClose={()=>setIsOpen(false)}>Registration</ModalRegister>
            <VideoModal show = {isVideo} onClose={()=>setIsVideo(false)}/>

            <div className="Container-Hero">
                <h4>Manage Your CoffeeShop or Your Restautant</h4>
                <h2>Make it Simple</h2>
                <h2>SCAN AND ORDER</h2>
                <div className="BtnContainer">
                    <button onClick={()=>setIsShown(true)} >
                    Log in</button>
                    <button onClick={()=>setIsOpen(true)} >Register</button>
                </div>
            </div>
            </Left>
            
            </HeroWrapper>
            
            
        </HeroSection>
        <BtnWrapper>
            <BtnPopup to="/shop">tomporary menu btn</BtnPopup>
        </BtnWrapper>
        </HeroContainer>
    )
}

export default Hero
