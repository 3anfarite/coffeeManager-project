import React from 'react'
import { FaChromecast, FaDribbble, FaEnvira, FaMedapps, FaSearch } from 'react-icons/fa'
import {AiOutlineCloudSync} from 'react-icons/ai'
import styled from 'styled-components'
import { BorderAll } from '@material-ui/icons'

const ServiceContainer = styled.div`
    background:#fff ;
    margin-top: 3rem;

    @media (max-width: 768px){
        padding-top: 8rem;
    }
`

const Heading = styled.h1`
    
    font-size: 50px;
    text-align:center ;
    padding-right: 1rem;
    span{
        color: #40798C;
    }
    @media (max-width: 500px){
        font-size: 3rem;
    }

`

const ServiceMain = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 5rem;
`

const Box = styled.div`
    padding: 20px;
    text-align:center;
    color: black;
    width: calc(100% / 3);
    box-sizing:border-box;
    transition: 0.4s;

    @media screen and (max-width:775px){        
        width: 50%;
    }
    
    @media screen and (max-width:650px){        
        width: 100%;
    }
`

const HeadingMain = styled.div`
    font-size: 18px;
    text-transform: uppercase;
    margin:5px;
    font-weight: 700;

    @media (max-width: 500px){
        font-size: 18px;
    }
`

const Icon = styled.i`
    font-size: 45px;
    margin-bottom: 30px;
    color:#40798C;
`

const ParaBox = styled.p`
    font-size: 15px;
    font-weight: 500;
    padding: 2rem;
    @media (max-width: 600px){
        font-size: 17px;
    }
    
`
const Border = styled.div`
    width: 160px;
    height: 3px;
    background: black;
    margin: 40px auto;
`


const Features = () => {
    return (
        
        <ServiceContainer>
            <Heading>Why <span>Our Service</span></Heading>    
            <Border></Border>
            
            <ServiceMain>
                <Box>
                    <Icon><FaChromecast/></Icon>
                    <HeadingMain>Lorem Ipsum</HeadingMain> 
                    <ParaBox>Duis vel enim mauris. Proin id tortor non lacus commodo dapibus ut non ante. Praesent fermentum laoreet risus, sit amet imperdiet risus.</ParaBox>
                </Box>
                <Box>
                    <Icon><AiOutlineCloudSync/></Icon>
                    <HeadingMain>Lorem Ipsum</HeadingMain> 
                    <ParaBox>Duis vel enim mauris. Proin id tortor non lacus commodo dapibus ut non ante. Praesent fermentum laoreet risus, sit amet imperdiet risus.</ParaBox>
                </Box>
                <Box>
                    <Icon><FaMedapps/></Icon>
                    <HeadingMain>Lorem Ipsum</HeadingMain> 
                    <ParaBox>Duis vel enim mauris. Proin id tortor non lacus commodo dapibus ut non ante. Praesent fermentum laoreet risus, sit amet imperdiet risus.</ParaBox>
                </Box>
                <Box>
                    <Icon><FaEnvira/></Icon>
                    <HeadingMain>Lorem Ipsum</HeadingMain> 
                    <ParaBox>Duis vel enim mauris. Proin id tortor non lacus commodo dapibus ut non ante. Praesent fermentum laoreet risus, sit amet imperdiet risus.</ParaBox>
                </Box>
                <Box>
                    <Icon><FaDribbble/></Icon>
                    <HeadingMain>Lorem Ipsum</HeadingMain> 
                    <ParaBox>Duis vel enim mauris. Proin id tortor non lacus commodo dapibus ut non ante. Praesent fermentum laoreet risus, sit amet imperdiet risus.</ParaBox>
                </Box>
                <Box>
                    <Icon><FaSearch/></Icon>
                    <HeadingMain>Lorem Ipsum</HeadingMain> 
                    <ParaBox>Duis vel enim mauris. Proin id tortor non lacus commodo dapibus ut non ante. Praesent fermentum laoreet risus, sit amet imperdiet risus.</ParaBox>
                </Box>
            </ServiceMain>
        </ServiceContainer>  
        
    )
}

export default Features