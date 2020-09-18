import React, { useState } from 'react'
import './Header.css';

import { Link } from 'react-router-dom';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header_left">
                <MenuRoundedIcon className="header_burgericon"/>
                <Link to="/">
                    <img 
                    className="youtube_logo"
                    src="https://www.freeiconspng.com/uploads/youtube-logo-png-picture-2.png"
                    alt="Youtube"
                    />
                </Link>
            </div>
            <div className="header_centre">
                <input 
                    onChange={e=> setInputSearch(e.target.value)} 
                    value={inputSearch} 
                    type="text" 
                    placeholder="Search"
                />                
                <Link to={'/search/${inputSearch}'}>
                    <SearchOutlinedIcon className="header_searchButton"/>
                </Link>
            </div>
            <div className="header_right">
                <VideoCallRoundedIcon className="header_rightIcons"/>
                <AppsRoundedIcon className="header_rightIcons"/>
                <NotificationsIcon className="header_rightIcons"/>
                <Avatar
                src="https://avatars3.githubusercontent.com/u/54438024?s=60&v=4"
                alt="Shikhar Srivastava"
                />
            </div>
        </div>
    )
}

export default Header
