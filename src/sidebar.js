import React from 'react'
import './sidebar.css';
import SidebarRow from './SidebarRow.js';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';

import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';

import SlideshowRoundedIcon from '@material-ui/icons/SlideshowRounded';
import LocalMoviesRoundedIcon from '@material-ui/icons/LocalMoviesRounded';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';

import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import FeedbackRoundedIcon from '@material-ui/icons/FeedbackRounded';



function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarRow Icon= {HomeIcon} title="Home"/> 
            <SidebarRow Icon= {WhatshotOutlinedIcon} title="Trending"/>
            <SidebarRow Icon= {SubscriptionsRoundedIcon} title="Subscriptions"/>

            <hr/>

            <SidebarRow Icon= {VideoLibraryRoundedIcon} title="Library"/>
            <SidebarRow Icon= {HistoryRoundedIcon} title="History"/>
            <SidebarRow Icon= {OndemandVideoOutlinedIcon} title="Your Videos"/>
            <SidebarRow Icon= {WatchLaterRoundedIcon} title="Watch Later"/>
            <SidebarRow Icon= {ThumbUpAltRoundedIcon} title="Liked Videos"/>
            <SidebarRow Icon= {ExpandMoreRoundedIcon} title="Show More"/>

            <hr/>

            <h5 className = "moreFromYoutube">MORE FROM YOUTUBE</h5>
            <SidebarRow Icon= {SlideshowRoundedIcon} title="Youtube Premium"/>
            <SidebarRow Icon= {LocalMoviesRoundedIcon} title="Movies"/>
            <SidebarRow Icon= {SportsEsportsRoundedIcon} title="Gaming"/>
            <SidebarRow Icon= {TrackChangesRoundedIcon} title="Live"/>
            <SidebarRow Icon= {FaceRoundedIcon} title="Fashion and Beauty"/>
            <SidebarRow Icon= {EmojiObjectsRoundedIcon} title="Learning"/>

            <hr/>

            <SidebarRow Icon= {SettingsRoundedIcon} title="Settings"/>
            <SidebarRow Icon= {FlagRoundedIcon} title="Report History"/>
            <SidebarRow Icon= {HelpRoundedIcon} title="Help"/>
            <SidebarRow Icon= {FeedbackRoundedIcon} title="Send Feedback"/>
    
            <hr/>

            <p className= "sidebar_bottom">© 2020 Google LLC</p>
                                
        </div>
    )
}

export default Sidebar
