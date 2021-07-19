import React from 'react'
import styled from 'styled-components';
import { FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { BsXDiamondFill } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';
import { GiCrystalize } from 'react-icons/gi'
import '../styles/Pricing.css'


const BtnPrice= styled.button`

`

function Pricing() {
    return (
        <IconContext.Provider value = {{color:'#fff' , size: 64}} >
        <div >
            <div className="pricing__section">
                <div className="pricing__wrapper" id="prices">
                    <h1 className="pricing__heading">Our Prices</h1>
                    <div className="pricing__container">
                        <Link to='/signup'  className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <FaFire/>
                                    </div>
                                    <h3>Starter</h3>
                                    <h4>100 MAD</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transactions</li>
                                        <li>2% Cash Back</li>
                                        <li>$10,000 Limit</li>
                                    </ul>

                                    <Button style={{color:"#fff",backgroundColor:"#141A29"}} >Choose Plan</Button>
                                </div>
                        </Link>
                        <Link to='/signup'  className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <BsXDiamondFill/>
                                    </div>
                                    <h3>Starter</h3>
                                    <h4>100 MAD</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transactions</li>
                                        <li>2% Cash Back</li>
                                        <li>$10,000 Limit</li>
                                    </ul>
                                    <Button style={{color:"black",backgroundColor:"white"}} >Choose Plan</Button>
                                </div>
                        </Link>
                        <Link to='/signup'  className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <GiCrystalize/>
                                    </div>
                                    <h3>Starter</h3>
                                    <h4>100 MAD</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transactions</li>
                                        <li>2% Cash Back</li>
                                        <li>$10,000 Limit</li>
                                    </ul>
                                    <Button style={{color:"#fff",backgroundColor:"#141A29"}}>Choose Plan</Button>
                                </div>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
