import "./SearchedVideoCard.css";
import { useEffect, useState } from "react";
import { formatVideoDuration } from '../../../utils/formatVideoDuration';
import { getChannelIcon } from '../../../api/getChannelIcon';
import { formatViewCount } from '../../../utils/formatViewCount';
import { formatVideoDate } from '../../../utils/formatVideoDate';
import { formatVideoDescription } from "../../../utils/formatVideoDescription";
import { RxDotFilled, RxStretchHorizontally } from "react-icons/rx";
import { HiOutlineDotsVertical } from "react-icons/hi";

function SearchedVideoCard(props) {
    const { info } = props;
    const [channelIcon, setChannelIcon] = useState('');

    let videoDuration = formatVideoDuration(info.contentDetails.duration);
    let videoViews = formatViewCount(info.statistics.viewCount);
    let videoDate = formatVideoDate(info.snippet.publishedAt);
    let videoDescription = formatVideoDescription(info.snippet.description);

    useEffect(() => {
        const getIcon = async () => {
            setChannelIcon(await getChannelIcon(info.snippet.channelId));
        }

        getIcon();
    }, []);

    return (
        <div className="searched-video-card">
            <div className="thumbnail">
                <img src={info.snippet.thumbnails.medium.url} alt='video-thumbnail'/>
                <p className="duration">{videoDuration}</p>
            </div>

            <div className="info">
                <div className="video-details">
                    <p className="video-title">{info.snippet.title}</p>
                    <p className='views-date'>{videoViews} <RxDotFilled/> {videoDate}</p>
                </div>
                <div className="channel-details">
                    <div className="channel-icon">
                        <img src={channelIcon} alt="channel-icon"/>
                    </div>
                    <p>{info.snippet.channelTitle}</p>
                </div>
                <p className="description">{videoDescription}</p>
            </div>

            <p className="video-actions"><HiOutlineDotsVertical/></p>
        </div>
    )
}

export default SearchedVideoCard;