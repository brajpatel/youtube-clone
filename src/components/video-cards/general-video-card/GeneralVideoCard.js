import './GeneralVideoCard.css';
import { useEffect, useState } from 'react';
import { formatVideoDuration } from '../../../utils/formatVideoDuration';
import { getChannelIcon } from "../../../api/getChannelIcon";
import { formatViewCount } from '../../../utils/formatViewCount';
import { formatVideoDate } from '../../../utils/formatVideoDate';
import { RxDotFilled } from "react-icons/rx";

function GeneralVideoCard(props) {
    const { info } = props;
    const [videoDuration, setVideoDuration] = useState('');
    const [channelIcon, setChannelIcon] = useState('');
    const [videoViews, setVideoViews] = useState('');
    const [videoDate, setVideoDate] = useState('');

    useEffect(() => {
        setVideoDuration(formatVideoDuration(info.contentDetails.duration));
        setVideoViews(formatViewCount(info.statistics.viewCount));
        setVideoDate(formatVideoDate(info.snippet.publishedAt));

        // const getIcon = async () => {
        //     setChannelIcon(await getChannelIcon(info.snippet.channelId));
        // }

        // getIcon();
    }, []);

    return (
        <div className="general-video-card">
            <div className="thumbnail">
                <img src={info.snippet.thumbnails.medium.url} alt='video-thumbnail'/>
                <p className='duration'>{videoDuration}</p>
            </div>
            <div className='bottom'>
                <div className='channel-icon'>
                    <img src={channelIcon} alt="channel-icon"/>
                </div>

                <div className='info'>
                    <p className='video-title'>{info.snippet.title}</p>
                    <p>{info.snippet.channelTitle}</p>
                    <p className='views-date'>{videoViews} <RxDotFilled/> {videoDate}</p>
                </div>
            </div>
        </div>
    )
}

export default GeneralVideoCard;