import { PinDropRounded } from '@material-ui/icons'
import React from 'react'
import './droplist.css'

const DropList = props => {
    return (
        <div className="dropdown">
            <button className="dropdown__toggle">
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className="dropdown__toggle-badge">{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div className="dropdown__content">
                {
                    props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
                }
                {
                    props.renderFooter ? (
                        <div className="dropdown__footer">
                            {props.renderFooter()}
                        </div>
                    ) :''
                }
            </div>
        </div>
    )
}

export default DropList
