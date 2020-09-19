import React from 'react'
import "./videoRow.css";

import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";

function videoRow(videoThumbnail, videoTitle, channelName, verified, views, timelapse, description) {

    return <div className="VideoRow">
        <div className="videoThumbnail">
            {videoThumbnail}
        </div>
        <h5 className="videoTitle">
            {videoTitle}
        </h5>
        <p className="videoTitle">
            {ChannelName}{verified} {views}Views.{timelapse} hours ago
        </p>
        <p className="description">
            {description}
        </p>


    </div>
}

export default videoRow
