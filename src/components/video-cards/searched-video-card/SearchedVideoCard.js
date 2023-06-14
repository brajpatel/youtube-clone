import "./SearchedVideoCard.css";
import { useEffect, useState } from "react";
import { formateVideoDuration } from '../../../utils/formatVideoDuration';
import { getChannelIcon } from '../../../api/getChannelIcon';
import { formatViewCount } from '../../../utils/formatViewCount';
import { formatVideoDate } from '../../../utils/formatVideoDate';
import { formatViewDescription } from "../../../utils/formatViewDescription";
import { RxDotFilled, RxStretchHorizontally } from "react-icons/rx";
import { HiOutlineDotsVertical } from "react-icons/hi";

function SearchedVideoCard(props) {
    const { info } = props;
    const [channelIcon, setChannelIcon] = useState('');

    let videoDuration = formateVideoDuration(info.contentDetails.duration);
    let videoViews = formatViewCount(info.statistics.viewCount);
    let videoDate = formatVideoDate(info.snippet.publishedAt);
    let videoDescription = formatViewDescription(info.snippet.description);

    useEffect(() => {
        const getIcon = async () => {
            setChannelIcon(await getChannelIcon(info.snippet.channelId));
        }

        getIcon();
    }, []);

    return (
        <div className="searched-video-card">
            <div className="thumbnail">
                <p>Image</p>
                <p className="duration">11:29</p>
            </div>

            <div className="info">
                <div className="video-details">
                    <p className="video-title">This Game made my PC blow up...</p>
                    <p className='views-date'>350k views <RxDotFilled/> 4 days ago</p>
                </div>
                <div className="channel-details">
                    <div className="channel-icon">
                        <p>V</p>
                    </div>
                    <p className='channel-name'>Vienna</p>
                </div>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam sit amet, consectetur adipiscing. Sajkit amet, consectetur adipiscing.</p>
            </div>

            <p className="video-actions"><HiOutlineDotsVertical/></p>
        </div>
    )
}

export default SearchedVideoCard;