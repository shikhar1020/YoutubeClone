import React from 'react'
import './searchPage.css';

import ChannelRow from "./channelRow";


import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import { VideoLibraryTwoTone } from '@material-ui/icons';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneRoundedIcon className="searchPage_filterIcon"/>
                <h4>FILTER</h4>
            </div>
            
            <hr/>
            
            <ChannelRow
                channelIcon = "https://i.pinimg.com/originals/4e/01/67/4e0167227f2fef66d2ff03a00cfbb469.jpg"
                channelName = "Shikhar Sangam"
                verified 
                subscribers = "234K"
                videosCount = {1285}
                description = "This channel is to make fun and learn to make fun! Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!"            
            />

            <hr/>

            <h4 className="searchOutput">Latest from Shikhar Sangam</h4>

            <videoRow
                videoThumbnail
                videoTitle
                channelName
                verified
                views
                timelapse
                description
            />

        </div>
    )
}

export default SearchPage
