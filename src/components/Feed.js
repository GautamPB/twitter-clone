import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'
import Tweeter from './Tweeter'
import Post from './Post'
import db from '../firebase'

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    }, [])

    return (
        <div className="feed">
            <Tweeter />
            {posts.map((post) => (
                <Post
                    key={post.data.key}
                    profilePic={post.data.profilePic}
                    username={post.data.username}
                    content={post.data.content}
                    timestamp={post.data.timestamp}
                />
            ))}
            {/* <Post
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
            /> */}
        </div>
    )
}

export default Feed
