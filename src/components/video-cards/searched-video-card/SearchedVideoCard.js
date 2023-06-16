import "./SearchedVideoCard.css";
import { useEffect, useState } from "react";
import { getVideoInfo } from "../../../api/getVideoInfo";
import { formatVideoDuration } from '../../../utils/formatVideoDuration';
import { getChannelIcon } from '../../../api/getChannelIcon';
import { formatViewCount } from '../../../utils/formatViewCount';
import { formatVideoDate } from '../../../utils/formatVideoDate';
import { formatVideoDescription } from "../../../utils/formatVideoDescription";
import { RxDotFilled } from "react-icons/rx";
import { HiOutlineDotsVertical } from "react-icons/hi";

function SearchedVideoCard(props) {
    const { info } = props;
    const [videoInfo, setVideoInfo] = useState([]);
    const [channelIcon, setChannelIcon] = useState('');


    useEffect(() => {
        getInfo();
    }, []);

    const getInfo = async () => {
        try {
            setVideoInfo(await getVideoInfo(info.id.videoId));
            setChannelIcon(await getChannelIcon(info.snippet.channelId));
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="searched-video-card">
            <div className="thumbnail">
                <img src={info.snippet.thumbnails.medium.url} alt='video-thumbnail'/>
                <p className="duration">{formatVideoDuration(videoInfo[0].contentDetails.duration)}</p>
            </div>

            <div className="info">
                <div className="video-details">
                    <p className="video-title">{info.snippet.title}</p>
                    <p className='views-date'>{formatViewCount(videoInfo[0].statistics.viewCount)} <RxDotFilled/> {formatVideoDate(videoInfo[0].snippet.publishedAt)}</p>
                </div>
                <div className="channel-details">
                    <div className="channel-icon">
                        <img src={channelIcon} alt="channel-icon"/>
                    </div>
                    <p>{info.snippet.channelTitle}</p>
                </div>
                <p className="description">{formatVideoDescription(videoInfo[0].snippet.description)}</p>
            </div>

            <p className="video-actions"><HiOutlineDotsVertical/></p>
        </div>
    )
}

export default SearchedVideoCard;