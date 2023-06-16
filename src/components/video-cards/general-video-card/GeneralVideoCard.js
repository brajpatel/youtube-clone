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
        getIcon();
    }, []);

    const getIcon = async () => {
        try {
            setChannelIcon(await getChannelIcon(info.snippet.channelId));
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="general-video-card">
            <div className="thumbnail">
                <img src={info.snippet.thumbnails.medium.url} alt='video-thumbnail'/>
                <p className='duration'>{formatVideoDuration(info.contentDetails.duration)}</p>
            </div>
            <div className='bottom'>
                <div className='channel-icon'>
                    <img src={channelIcon} alt="channel-icon"/>
                </div>

                <div className='info'>
                    <p className='video-title'>{info.snippet.title}</p>
                    <p>{info.snippet.channelTitle}</p>
                    <p className='views-date'>{formatViewCount(info.statistics.viewCount)} <RxDotFilled/> {formatVideoDate(info.snippet.publishedAt)}</p>
                </div>
            </div>
        </div>
    )
}

export default GeneralVideoCard;