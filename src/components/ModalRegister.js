import React, {useRef} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { TextField, Button, Divider } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import '../styles/Form.css'
import { MdClose } from 'react-icons/md'



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




export default function ModalRegister({open, onClose}) {

    const modalRef = useRef()

   

    if(!open) return null
    return (
        <OVERLAY_STYLES>
        <ModalStyles>
            <div className="icon">
                <div className="icon_class">
                    <PersonAddIcon fontSize="large"/>
                </div>
                <div className="text">Sign Up</div>
            </div>

            <div className="textField">
                    <TextField className="p-2" id="firstname" type="text" variant="outlined" label="Enter First Name" fullWidth/>
                    <TextField className="p-2" id="lastname" type="text" variant="outlined" label="Enter Last Name" fullWidth/>
            </div>

            <div className="textField">
            <TextField className="p-2" id="email" type="text" variant="outlined" label="Enter your Email" fullWidth/>
            <TextField className="p-2" id="Password" type="password" variant="outlined" label="Enter Password" fullWidth/>
            <TextField className="p-2" id="Password2" type="password" variant="outlined" label="Confirm your Password" fullWidth/>
            {/* <FormControlLabel
                control={
                    <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                        checkedIcon={<CheckBoxIcon fontsize="small"/>}
                        name="checkedI"
                    />
                }
                label="I agree to all terms and conditions."/> */}
            <Button variant="contained" color="primary" fullWidth > Register </Button>
            </div>
            <Divider variant="middle"/>
            <p className="text-center">
                <Link to="/login" className="text-black-50">
                   <h5>Already have an account?</h5> 
                </Link>
            </p>
            <CloseModalButton aria-label ='Close modal' onClick={onClose}  />


        </ModalStyles>
        </OVERLAY_STYLES>
    )
}

{/* <button onClick = {onClose}>close Modal</button> */}