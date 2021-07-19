import React from 'react'
import  InstagramIcon  from '@material-ui/icons/Instagram';
import  FacebookIcon from '@material-ui/icons/Facebook';
import  LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css"
import MailIcon from '@material-ui/icons/Mail';




function Footer() {
    return (
        <div className = "footer">
            <div className = "socialMedia">
                <InstagramIcon /><FacebookIcon/><LinkedInIcon/><MailIcon/>
            </div>
            <p> &copy; 2021 coffeesite</p>
        </div>
    )
}

export default Footer
