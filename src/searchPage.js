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
                channelIcon = "https://lh3.googleusercontent.com/XmGIf1UdyxusNS03J3rJJgGLTuxiZ_Gnuaw19iYdc1Db2-9jm3styDRfDEdKzOtYng1rR5jBSPC1CreED_7Ux-P7s1PozMlgflUhlraMjopKUTcdKHdlngLN8Wg3krkMAoAf5dwH2tAMnxrWpKtwoRBjRhjfUmIIl0rcjg0c2OFyBWu5rLvh6OZENAycDPZI2vcHR6MKAmd-DB25GRCsEkwvhBNT9MqWkfwpubr4eBtmdChFPBnnvzJ7Qll-2yt0iM5Kw-a6I8-z7GMf71wPUWK7neJl0XU2TOYIIJY3OhCuS9w6-NnFaHJjmbsD6znGw9NjzR97dCvJmc2gN8dv8sQ9OXwIx3QZaTcq_knpUBCU8GMhQjjcwc-EA5Od4QAckPKT7mdE2yclmRS4Uxq1MF_ooA6IaXS2RZMB1MYqmh9KZSMjhXA6lB9rFztxQXzFU9HzzhgPpqfLEClKTS6QIcnRrPYktVUNF5YVJFbhY3-ZrM3xtoVNnixaXFiYRARkwFQwBDTtsVqzFk8npaYoqp2FMNgzv64rzSHeE391TW5SZZCUkh4dom_hrH7cDGvpBrR2TFbxHyTnecg7QPfIBICaBzrTWmNDvm3wJ2SHJcStMRnnMRs6cKTbWiuoVFpblQ09gBGcRwiHYG79q1n7CEHEWFTsihJ9BUlMfs35VEh_wYIadrt7quzS_fG1nKA=w167-h296-no?authuser=0"
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
                videoTitle ="Aasman Ko Chukar Dekha Song || Ft. Ironman || Edit by Rocking Bharat"
                channelName ="Shikhar Sangam"
                verified
                views = "255K"
                timelapse ="2 hours ago"
                description = "Aasmaan ko chukar dekha Taron ke karli savari Chand per bhi nacche hum Ki Tofaano se yaari Pagalpan yeh kasia hai Kaam yeh jaisa taisa hai Sochti nazakat hai "
            />

            <VideoRow
                videoThumbnail="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/do.png?jv4xy6BkkiQCKpQrt1D9mjNqlAa99p6D&size=770:433"
                videoTitle ="Panchayat Latest Web Series | Full Story"
                channelName ="Shikhar Sangam"
                verified
                views = "255K"
                timelapse ="1 week ago"
                description = "Aasmaan ko chukar dekha Taron ke karli savari Chand per bhi nacche hum Ki Tofaano se yaari Pagalpan yeh kasia hai Kaam yeh jaisa taisa hai Sochti nazakat hai "
            />

            <VideoRow
                videoThumbnail="https://images.news18.com/ibnlive/uploads/2018/12/Mirzapur.jpg"
                videoTitle ="Big Announcement | Mirzapur 2 Coming Soon"
                channelName ="Shikhar Sangam"
                verified
                views = "255K"
                timelapse ="3 weeks ago"
                description = "Aasmaan ko chukar dekha Taron ke karli savari Chand per bhi nacche hum Ki Tofaano se yaari Pagalpan yeh kasia hai Kaam yeh jaisa taisa hai Sochti nazakat hai "
            />

            <VideoRow
                videoThumbnail="https://i.ytimg.com/vi/Rbp2XUSeUNE/maxresdefault.jpg"
                videoTitle ="Yeh Jawaani Hai Deewani - Official Trailer : The Revisit | Ranbir Kapoor, Deepika Padukone"
                channelName ="Shikhar Sangam"
                verified
                views = "255K"
                timelapse ="1 month ago"
                description = "Aasmaan ko chukar dekha Taron ke karli savari Chand per bhi nacche hum Ki Tofaano se yaari Pagalpan yeh kasia hai Kaam yeh jaisa taisa hai Sochti nazakat hai "
            />

            <VideoRow
                videoThumbnail="https://english.cdn.zeenews.com/sites/default/files/2020/06/25/868680-dil-bechara.jpg"
                videoTitle ="Dil Bechara – Title Track in a Nutshell | Sushant Singh Rajput | Sanjana Sanghi | A.R. Rahman "
                channelName ="Shikhar Sangam"
                verified
                views = "255K"
                timelapse ="2 months ago"
                description = "Aasmaan ko chukar dekha Taron ke karli savari Chand per bhi nacche hum Ki Tofaano se yaari Pagalpan yeh kasia hai Kaam yeh jaisa taisa hai Sochti nazakat hai "
            />

        </div>
    )
}

export default SearchPage
