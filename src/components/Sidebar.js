import React from 'react'
import '../styles/Sidebar.css'
import { Avatar, Button } from '@material-ui/core'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import ExploreIcon from '@material-ui/icons/ExploreOutlined'
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/ForumOutlined'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined'
import MoreIcon from '@material-ui/icons/MoreHorizOutlined'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <Button>
                    <img
                        className="sidebar__img"
                        src="https://pngimg.com/uploads/twitter/twitter_PNG95259.png"
                        alt=""
                    />
                </Button>
            </div>

            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={ExploreIcon} title="Explore" />
            <SidebarRow Icon={NotificationsIcon} title="Notifications" />
            <SidebarRow Icon={MessageIcon} title="Messages" />
            <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
            <SidebarRow Icon={ListIcon} title="Lists" />
            <SidebarRow Icon={PersonIcon} title="Profile" />
            <SidebarRow Icon={MoreIcon} title="More" />

            <div className="sidebar__button">
                <Button>Tweet</Button>
            </div>

            <SidebarRow Icon={Avatar} title="Gautam" />
        </div>
    )
}

export default Sidebar
