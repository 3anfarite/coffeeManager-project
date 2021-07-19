import React from 'react'
import styled from 'styled-components'
import '../styles/playerStyles.css'
import { MdClose } from 'react-icons/md';



const Container = styled.div`
    position: fixed;
    top: 50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:#fff;
    z-index: 1;
    width:70%;
    height:70%;

    @media screen and (max-width:600px){
        width:100%;
        height:100%;
    }
`   

const OVERLAY_STYLES = styled.div`
    position: fixed;
    left: 0;
    top:0;
    background-color: rgba(0,0 ,0 , 0.5);
    width: 100%;
    height: 100%;
    z-index:1000;

    

`
const CloseModalButton = styled(MdClose)`
    cursor:pointer;
    position: absolute;
    top:0;
    right: -4px;
    height: 32px;
    width: 32px;
    padding:0;
    z-index: 10;
`

export default function VideoModal({show, onClose}) {

      if(!show) return null
      return (
        <>
        <OVERLAY_STYLES>
        
            <Container>                
                <div className = "video" >
                    <video className="iframe" controls>
                    <source  src="/videos/sample.mp4"
                            type="video/mp4"/>
                    </video>

                </div>
                {/* <span className="close" aria-label ='Close modal' onClick={onClose}  >&times;</span> */}
                <CloseModalButton aria-label ='Close modal' onClick={onClose}  />
            </Container>

        </OVERLAY_STYLES>

            
   </>
    )
}

