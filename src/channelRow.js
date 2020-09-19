import React from 'react'
import "./channelRow.css";

import { Avatar } from "@material-ui/core";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";


function ChannelRow({channelIcon, channelName, verified, subscribers, videosCount, description}) {

    return <div className="channelRow"> 
            <Avatar className="channelRow_logo" 
            alt={channelName} src={channelIcon}
            />

            <div className="channelRow_text">
                <h4> 
                    {channelName} {verified && <CheckCircleRoundedIcon/>} 
                </h4>
                <p className="subscribersandvideos">
                    {subscribers} Subscribers .{videosCount} Videos
                </p>
                <p className="description">
                    {description} 
                </p>
            
            </div>

    </div>
}

export default ChannelRow
