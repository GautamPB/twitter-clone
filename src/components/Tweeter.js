import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Tweeter.css'

function Tweeter() {
    return (
        <div className="tweeter">
            <h2 className="tweeter__header">Home</h2>

            <div className="tweeter__top">
                <Avatar className="tweeter__profilePic" />
                <input type="text" placeholder="What's happening?" />
            </div>
        </div>
    )
}

export default Tweeter
