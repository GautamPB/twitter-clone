import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Post.css'
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RetweetIcon from '@material-ui/icons/ReplayOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/SendOutlined'

function Post({ profilePic, username, content, timestamp }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__profilePic" />
                <h4>{username}</h4>
                <p>timestamp...</p>
            </div>

            <div className="post__content">
                <p>{content}</p>
            </div>

            <div className="post__bottom">
                <div className="post__option post__blue">
                    <CommentIcon />
                </div>

                <div className="post__option post__green">
                    <RetweetIcon />
                </div>

                <div className="post__option post__red">
                    <LikeIcon />
                </div>

                <div className="post__option post__blue">
                    <ShareIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
