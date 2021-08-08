import React from 'react'
import logo from '../../images/logo.svg'
import './topnav.css'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RedoOutlined, Save, Undo } from '@material-ui/icons';
import { FaDownload } from 'react-icons/fa';

const useStyles = makeStyles({
    button: {
      backgroundColor:"#141A29",
      color:"white",
      boxShadow: 'none',
      borderRadius: '0',
      '&:hover': {
        backgroundColor: '#40798C',
        boxShadow: 'none',
    },
  },
    buttonIcon:{
        backgroundColor:"#141A29",
        color:"white",
        boxShadow: 'none',
        maxHeight: '100px',
        borderRadius: '0',
        minWidth: '100px',
        minHeight: '60px',
        '&:hover': {
            backgroundColor: '#40798C',
            boxShadow: 'none',
        },
        "&:nth-of-type(1)": {
            marginRight:'-10px',
        },
        "&:nth-of-type(2)": {
            marginRight:'-15px',
        }
    }
})

const TopNav = () => {
    const classes = useStyles()

    return (
    <div className='topnav'>
        <div className="topnav__logo">
            <img src={logo} alt="company logo" />
        </div>
        <div className="topnav__right">
            <div className="topnav__right-item">

                <Button
                    className={classes.buttonIcon}
                    variant="contained"
                    startIcon={<Undo></Undo>}
                    
                ></Button>

                <Button
                    className={classes.buttonIcon}
                    variant="contained"
                    startIcon={<RedoOutlined></RedoOutlined>}
                ></Button>

                <Button
                    className={classes.button}
                    variant="contained"
                    startIcon={<Save></Save>}
                    style={{
                        minWidth: '100px', minHeight: '60px'}}
                > save</Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    startIcon={<FaDownload></FaDownload>}
                    style={{
                        minWidth: '150px', minHeight: '60px'}}
                > Download</Button>
                
            </div>
           
        </div>
    </div>
    )
}

export default TopNav
