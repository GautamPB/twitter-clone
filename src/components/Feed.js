import React from 'react'
import '../styles/Feed.css'
import Tweeter from './Tweeter'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <Tweeter />
            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1200px-Code.org_logo.svg.png"
                username="Gautam"
                content="This is my first tweet!"
            />
            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1200px-Code.org_logo.svg.png"
                username="Gautam"
                content="This is my first tweet!"
            />
            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1200px-Code.org_logo.svg.png"
                username="Gautam"
                content="This is my first tweet!"
            />
            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1200px-Code.org_logo.svg.png"
                username="Gautam"
                content="This is my first tweet!"
            />

            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1200px-Code.org_logo.svg.png"
                username="Gautam"
                content="This is my first tweet!"
            />

            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1200px-Code.org_logo.svg.png"
                username="Gautam"
                content="This is my first tweet!"
            />
        </div>
    )
}

export default Feed
