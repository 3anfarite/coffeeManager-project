import React from 'react'
import styled from 'styled-components'
import wave from "../images/wave.svg"

const AboutSection = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    background-color: white;
`

const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;


`
const Main = styled.div`
  margin: 0 15rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }

`

const Title = styled.h1`
    display: inline-block;
    font-size: 2rem;
`
const CurvedLine=styled.div`
    width: 7rem;
    height: 2rem;
    border: 5px solid #141A29;
    border-color: #40798C transparent transparent;
    border-radius: 150%/60px 70px 0 0;
`

const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: #141A29;
`
const AboutText = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 3rem;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`
const Content = styled.div`
  
`

const About = () => {
    return (
        <AboutSection id='about'>
            {/* <Waves src={wave} alt="waves" width="400" height="400"/> */}

            <Main>
                <div>
                    <Title>About Us</Title>
                    <CurvedLine/>
                </div>
                
                    <AboutText>
                        <Text>
                        Donec ultrices faucibus ipsum malesuada eleifend. Nullam ac accumsan orci, vitae finibus tortor. Aliquam ullamcorper sodales nisi eget euismod. Cras non egestas lacus. Nullam ac sem egestas, sce lerisque lorem eu, gravida leo. Nulla eget tempus sem, vitae iaculis arcu. Nam sed ipsum eget tellus euismod vestibulum vel et ligula. Integer lacinia lacus sit amet lorem elementum ultrices. Donec mollis fermentum felis, eu facilisis felis pellentesque vel.
                        </Text>
                    </AboutText>

            </Main>

        </AboutSection>
    )
}

export default About
