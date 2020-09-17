import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './videocard.css'

function VideoCard({ thumbnailImage, videotitle, channelName, views, timestamp, channelLogo}) {
    return (

        <div className="videoCard">
            <img className="thumbnail" src={thumbnailImage} alt=""/>

            <div className="videoCard_info">
                <Avatar
                    classname="channel_avatar" 
                    alt={channelName} 
                    src={channelLogo}
                />
                <div className="video_text">
                    <h4>{videotitle}</h4>
                    <p>{channelName}</p>
                    <p>
                        {views}.{timestamp}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCard
