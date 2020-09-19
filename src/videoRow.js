import React from 'react'
import "./videoRow.css";

import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";

function VideoRow ({videoThumbnail, videoTitle, channelName, verified, views, timelapse, description}) {

    return <div className="videoRow">
        <img className="videoThumbnail" src={videoThumbnail} alt=""/>
        <div className="videoDetails">
            <h4 className="videoTitle">
                {videoTitle}
            </h4>
            <p className="videoTitle">
                {channelName} {verified && <CheckCircleRoundedIcon/>} {views} Views.{timelapse} hours ago
            </p>
            <p className="description">
                {description}
            </p>
        </div>
    </div>
}

export default VideoRow
