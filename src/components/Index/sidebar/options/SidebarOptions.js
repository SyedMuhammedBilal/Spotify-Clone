import React from 'react'
import './SidebarOptions.css'

const SidebarOptions = ({ title, Icon }) => {
    return (
        <div className="sidebarOptions">
            {Icon && <Icon className="sidebar__options-icons" />}
            {Icon ? <h4> {title} </h4> : 
                <p> {title} </p>
            }
        </div>
    )
}

export default SidebarOptions