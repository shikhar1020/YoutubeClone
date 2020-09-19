import React from 'react'
import './searchPage.css';

import ChannelRow from "./channelRow";
import VideoRow from "./videoRow";

import TuneRoundedIcon from '@material-ui/icons/TuneRounded';


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

            <VideoRow
                videoThumbnail="https://i.pinimg.com/originals/f8/01/80/f801804bd7a593501049324280bd675e.jpg"
                videoTitle ="Aasman ko chukar dekha, Taaron ki kar li sawari!!"
                channelName ="Shikhar Sangam"
                verified
                views = "255K"
                timelapse ="3"
                description = "Aasmaan ko chukar dekha Taron ke karli savari Chand per bhi nacche hum Ki Tofaano se yaari Pagalpan yeh kasia hai Kaam yeh jaisa taisa hai Sochti nazakat hai "
            />

            <VideoRow
                videoThumbnail="https://i.pinimg.com/originals/f8/01/80/f801804bd7a593501049324280bd675e.jpg"
                videoTitle ="Aasman ko chukar dekha, Taaron ki kar li sawari!!"
                channelName ="Shikhar Sangam"
                verified
                views = "255K"
                timelapse ="3"
                description = "Aasmaan ko chukar dekha Taron ke karli savari Chand per bhi nacche hum Ki Tofaano se yaari Pagalpan yeh kasia hai Kaam yeh jaisa taisa hai Sochti nazakat hai "
            />

            <VideoRow
                videoThumbnail="https://i.pinimg.com/originals/f8/01/80/f801804bd7a593501049324280bd675e.jpg"
                videoTitle ="Aasman ko chukar dekha, Taaron ki kar li sawari!!"
                channelName ="Shikhar Sangam"
                verified
                views = "255K"
                timelapse ="3"
                description = "Aasmaan ko chukar dekha Taron ke karli savari Chand per bhi nacche hum Ki Tofaano se yaari Pagalpan yeh kasia hai Kaam yeh jaisa taisa hai Sochti nazakat hai "
            />

            <VideoRow
                videoThumbnail="https://i.pinimg.com/originals/f8/01/80/f801804bd7a593501049324280bd675e.jpg"
                videoTitle ="Aasman ko chukar dekha, Taaron ki kar li sawari!!"
                channelName ="Shikhar Sangam"
                verified
                views = "255K"
                timelapse ="3"
                description = "Aasmaan ko chukar dekha Taron ke karli savari Chand per bhi nacche hum Ki Tofaano se yaari Pagalpan yeh kasia hai Kaam yeh jaisa taisa hai Sochti nazakat hai "
            />

            <VideoRow
                videoThumbnail="https://i.pinimg.com/originals/f8/01/80/f801804bd7a593501049324280bd675e.jpg"
                videoTitle ="Aasman ko chukar dekha, Taaron ki kar li sawari!!"
                channelName ="Shikhar Sangam"
                verified
                views = "255K"
                timelapse ="3"
                description = "Aasmaan ko chukar dekha Taron ke karli savari Chand per bhi nacche hum Ki Tofaano se yaari Pagalpan yeh kasia hai Kaam yeh jaisa taisa hai Sochti nazakat hai "
            />

        </div>
    )
}

export default SearchPage
