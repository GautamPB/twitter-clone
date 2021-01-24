import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import '../styles/Tweeter.css'
import PhotoIcon from '@material-ui/icons/InsertPhotoOutlined'
import GifIcon from '@material-ui/icons/Gif'
import PollIcon from '@material-ui/icons/Poll'
import EmojiIcon from '@material-ui/icons/EmojiEmotionsOutlined'
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined'

function Tweeter() {
    const [input, setInput] = useState('')

    const tweet = (e) => {
        e.preventDefault() //prevents refresh of the page
        console.log(input)
        setInput('')
    }

    return (
        <div className="tweeter">
            <h2 className="tweeter__header">Home</h2>

            <div className="tweeter__top">
                <Avatar className="tweeter__profilePic" />
                <input
                    type="text"
                    placeholder="What's happening?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>

            <div className="tweeter__bottom">
                <PhotoIcon className="tweeter__option" />
                <GifIcon className="tweeter__option" />
                <PollIcon className="tweeter__option" />
                <EmojiIcon className="tweeter__option" />
                <CalendarIcon className="tweeter__option" />

                <Button className="tweeter__button" onClick={tweet}>
                    Tweet
                </Button>
            </div>
        </div>
    )
}

export default Tweeter
