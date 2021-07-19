import React, {useRef, useEffevt, useCallback} from 'react'
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { TextField, Button, Divider } from '@material-ui/core';
import '../styles/Form.css'
import PersonIcon from '@material-ui/icons/Person';
import { MdClose } from 'react-icons/md'
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';


const ModalStyles = styled.div`
    position: fixed;
    top: 50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:#fff;
    padding:50px;
    z-index: 1;

    

    @media screen and (max-width:600px){
        width:100%;
        height:100%;
    }
`
const OVERLAY_STYLES = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.8);
    z-index: 1000;
`

const CloseModalButton = styled(MdClose)`
    cursor:pointer;
    position: absolute;
    top:20px;
    right: 20px;
    height: 32px;
    width: 32px;
    padding:0;
    z-index: 10;
`



export default function ModalLogin({show, onClose}) {


    if(!show) return null
    return (
        <OVERLAY_STYLES>
            
        <ModalStyles>
            <div className="icon">
                <div className="icon_class">
                    <PersonIcon fontSize="large"/>
                </div>
                <div className="text">Log In</div>
            </div>

            <div className="textField">
            <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter your Email" fullWidth/>
            <TextField id="Password" className="p-2" type="password" variant="outlined" label="Enter Password" fullWidth/>
            
            <Button variant="contained" color="primary" fullWidth>Login</Button>
            </div>
            <Divider variant="middle"/>
            <p className="text-center">
                <Link to="/signup" className="text-black-50">
                    <h4>Create account</h4>
                </Link>
            </p>
            <CloseModalButton aria-label ='Close modal' onClick={onClose}  />
            <hr></hr>
            <p className="text-center">Or login using your social account</p>
            
                <FacebookLoginButton style={{marginTop: "3rem"}} />
                
                <GoogleLoginButton style={{marginTop: "1rem"}}/>

        </ModalStyles>
        </OVERLAY_STYLES>
    )
}
