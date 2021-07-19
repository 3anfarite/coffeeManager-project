import React from 'react'
import styled from 'styled-components'


const TextBlock = ({ topic, title, subText, children }) => {
    return (
        <LeftBlock>
            <Topic>
                 <Circle/>{/*You have your own design */}
                <span>{topic}</span>
            </Topic>
            {/* Saving yours and your clients time */}
            <Title>{title}</Title>
            <SubText>
                {subText}
                {/* we help you own your website to manage your restaurant */}
            </SubText>
            {children}            
        </LeftBlock>
    )
}

const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    line-height:1.5 ;
    

    @media only Screen and (max-width: 48em){
        width: 100%;
        position: relative;
        text-align: center;
        align-items: center;
    }
        
`

const Topic =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#141A29 ;
    font-weight: 700;
    font-size: calc(0.4rem + 0.4vw);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: white;
    
`

const Circle = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #40798C;
    margin-right: 0.5rem;
`

const Title = styled.h1`
    font-size: calc(2rem + 1vw);
    line-height: 1.2;
    padding: 0.5rem 0;
`
const SubText = styled.h5`
    font-size: calc(0.5rem + 0.5vw);
    color:#40798C;
    @media only Screen and (max-width: 48em){
        font-size: 0.8rem;
    }
`



export default TextBlock
