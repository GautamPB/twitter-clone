import { Icon, Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/SidebarRow.css'

function SidebarRow({ image, Icon, title }) {
    return (
        <div className="sidebarRow">
            {Icon && <Icon />}
            {image && <Avatar src={image} />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
