import { Icon } from '@material-ui/core'
import React from 'react'
import '../styles/SidebarRow.css'

function SidebarRow({ Icon, title }) {
    return (
        <div className="sidebarRow">
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
