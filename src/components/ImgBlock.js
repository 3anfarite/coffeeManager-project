import React from 'react'
import styled from 'styled-components';

const RightBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48%;
    position: relative;

    @media only Screen and (max-width:48em){
        display: none;
    }
`

const ImgBlock = ({img}) => {
    const Image = require(`../images/${img}`).default;
    //console.log(SvgIcon);
    return (
      <RightBlock id="ImageBlock">
        <img src={Image} alt="Services" />
      </RightBlock>
    )
}

export default ImgBlock
